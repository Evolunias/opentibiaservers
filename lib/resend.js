const RESEND_API_BASE = 'https://api.resend.com'

/** @param {unknown} email */
export function normalizeEmail(email) {
  return String(email || '')
    .trim()
    .toLowerCase()
}

function getResendApiKey() {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error('RESEND_API_KEY is not configured')
  return key
}

function getConfiguredAudienceId() {
  return String(process.env.RESEND_AUDIENCE_ID || '').trim() || null
}

function getAudienceName() {
  return (
    String(process.env.RESEND_AUDIENCE_NAME || '').trim() ||
    'OpenTibiaServers Newsletter'
  )
}

async function resendFetch(path, options = {}) {
  const apiKey = getResendApiKey()
  const res = await fetch(`${RESEND_API_BASE}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  })
  const text = await res.text()
  let data = null
  try {
    data = text ? JSON.parse(text) : null
  } catch {
    data = { raw: text }
  }
  return { ok: res.ok, status: res.status, data }
}

/**
 * Resolve newsletter audience id from env, else list/create by RESEND_AUDIENCE_NAME.
 */
export async function getOrCreateNewsletterAudience() {
  const configured = getConfiguredAudienceId()
  if (configured) return configured

  const audienceName = getAudienceName()
  const listed = await resendFetch('/audiences', { method: 'GET' })
  if (listed.ok) {
    const audiences = listed.data?.data || listed.data?.audiences || []
    const existing = audiences.find(
      (a) => String(a?.name || '').trim() === audienceName
    )
    if (existing?.id) return existing.id
  }

  const created = await resendFetch('/audiences', {
    method: 'POST',
    body: JSON.stringify({ name: audienceName }),
  })

  if (!created.ok || !created.data?.id) {
    const msg =
      created.data?.message ||
      created.data?.error ||
      `Failed to create Resend audience (HTTP ${created.status})`
    throw new Error(typeof msg === 'string' ? msg : JSON.stringify(msg))
  }

  console.info(
    `[resend] Created audience "${audienceName}" id=${created.data.id}. Set RESEND_AUDIENCE_ID in hosting env / .env.local.`
  )
  return created.data.id
}

/**
 * Add a contact to the newsletter audience.
 * Primary: POST /audiences/{id}/contacts
 * Fallback on 404: POST /contacts with audience_id
 */
export async function addContactToAudience({ email, firstName } = {}) {
  const normalized = normalizeEmail(email)
  if (!normalized) throw new Error('email is required')

  const audienceId = await getOrCreateNewsletterAudience()
  const first_name = firstName ? String(firstName).trim() : undefined
  const payload = { email: normalized, unsubscribed: false }
  if (first_name) payload.first_name = first_name

  const primary = await resendFetch(`/audiences/${audienceId}/contacts`, {
    method: 'POST',
    body: JSON.stringify(payload),
  })

  const isDuplicate = (status, data) => {
    const errMsg = String(data?.message || data?.error || '').toLowerCase()
    return (
      status === 409 ||
      errMsg.includes('already') ||
      errMsg.includes('exists')
    )
  }

  if (primary.ok) {
    return {
      audienceId,
      contactId: primary.data?.id || null,
      raw: primary.data,
    }
  }

  if (isDuplicate(primary.status, primary.data)) {
    return {
      audienceId,
      contactId: primary.data?.id || null,
      raw: primary.data,
      duplicate: true,
    }
  }

  if (primary.status === 404) {
    const fallback = await resendFetch('/contacts', {
      method: 'POST',
      body: JSON.stringify({ ...payload, audience_id: audienceId }),
    })

    if (fallback.ok || isDuplicate(fallback.status, fallback.data)) {
      return {
        audienceId,
        contactId: fallback.data?.id || null,
        raw: fallback.data,
        duplicate: isDuplicate(fallback.status, fallback.data) || undefined,
      }
    }

    throw new Error(
      fallback.data?.message ||
        fallback.data?.error ||
        `Resend contacts create failed (HTTP ${fallback.status})`
    )
  }

  throw new Error(
    primary.data?.message ||
      primary.data?.error ||
      `Resend audience contact create failed (HTTP ${primary.status})`
  )
}
