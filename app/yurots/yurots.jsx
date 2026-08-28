import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "community_archive-gala-yurots",
  "slug": "yurots",
  "name": "YurOTS",
  "host": "yurot.online",
  "ip": "yurot.online",
  "port": 7171,
  "location": "POLAND",
  "version": "7.6",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 80,
  "source": "community_archive",
  "source_id": "https://opentibiaservers.com/",
  "source_url": "https://opentibiaservers.com/",
  "website_url": "https://yurot.online/",
  "external_launch_url": "https://yurot.online/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "YurOTS",
  "template_name": "community_archive_source_reference",
  "updated_at": "2026-07-28T02:51:26.658Z",
  "last_seen_at": "2025-12-04T19:38:57+0100",
  "last_check": "2026-07-28T02:51:26.658Z",
  "official_summary": "YurOTS enters the directory through a real community_archive server launch archive thread rather than an invented listing. The surviving record provides region hint: POLAND, version hint: 7.6, server address: yurot.online, port 7171, 72 replies, 8,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "YurOTS is preserved through its community_archive server launch archive trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: community_archive server launch archive thread",
    "Official website/AAC: https://yurot.online/",
    "Server address: yurot.online",
    "Server port: 7171",
    "Thread author: Sakiko",
    "Original post date: 12/5/2025",
    "Forum discussion: 72 replies",
    "Thread visibility: 8,000 views",
    "Parsed version/client hint: 7.6",
    "Parsed region hint: POLAND"
  ],
  "tags": [
    "community_archive server launch archive",
    "community thread",
    "POLAND",
    "7.6",
    "POLAND",
    "7.6",
    "19 August 2022 18:00 CET"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://yurot.online/",
      "label": "YurOTS official website"
    },
    {
      "type": "community_forum",
      "url": "https://opentibiaservers.com/",
      "label": "community_archive server launch archive thread"
    },
    {
      "type": "forum_index",
      "url": "https://opentibiaservers.com/",
      "label": "community_archive server launch archive forum"
    },
    {
      "type": "source_link",
      "url": "https://yurot.online/",
      "label": "https://yurot.online/"
    }
  ],
  "faq_items": [
    {
      "question": "Is YurOTS verified?",
      "answer": "This page verifies that a matching community_archive server launch archive thread exists and that the thread exposes https://yurot.online/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm YurOTS?",
      "answer": "Start with https://yurot.online/ and the linked community_archive thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "YurOTS exposes https://yurot.online/ from its community_archive server launch archive source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
    },
    {
      "title": "Why this community_archive source matters",
      "body": "community_archive server launch archive is one of the longest-running community advertising boards for Open Tibia servers. A thread there can preserve launch positioning, owner updates, community replies, screenshots, and player discussion that a compact server-list row cannot show."
    },
    {
      "title": "What this page still needs from the community",
      "body": "This record should be expanded with owner-confirmed homepage links, screenshots, client/download details, rates, PvP rules, update history, Discord or forum links, and player reviews. Until those are verified, the page keeps source facts separate from missing details."
    }
  ]
};

export function generateMetadata() {
  return buildArticleMetadata(page);
}

export default function YurotsPage() {
  return <CuratedGuideArticle page={page} />;
}
