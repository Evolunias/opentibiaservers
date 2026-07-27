import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-enforced-server-usa');
}

export default function XanteriaPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-enforced-server-usa" />;
}
