import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "community_archive-gala-treasura-long-term-x1-start-12-04-2024-at-18-00-cest",
  "slug": "treasura-long-term-x1-start-12-04-2024-at-18-00-cest",
  "name": "Treasura |Long term x1| Start 12/04/2024 at 18:00 CEST",
  "host": "treasura.online",
  "ip": "treasura.online",
  "port": 7171,
  "location": "Poland",
  "version": "8",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 8,
  "source": "community_archive",
  "source_id": "https://opentibiaservers.com/",
  "source_url": "https://opentibiaservers.com/",
  "website_url": "https://treasura.online/",
  "external_launch_url": "https://treasura.online/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Treasura |Long term x1| Start 12/04/2024 at 18:00 CEST",
  "template_name": "community_archive_source_reference",
  "updated_at": "2026-07-28T02:51:27.652Z",
  "last_seen_at": "2024-04-07T11:52:16+0200",
  "last_check": "2026-07-28T02:51:27.652Z",
  "official_summary": "Treasura |Long term x1| Start 12/04/2024 at 18:00 CEST enters the directory through a real community_archive server launch archive thread rather than an invented listing. The surviving record provides region hint: Poland, version hint: 8, server address: treasura.online, port 7171, official website reachable during import, 239 replies, 43,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Treasura |Long term x1| Start 12/04/2024 at 18:00 CEST is preserved through its community_archive server launch archive trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: community_archive server launch archive thread",
    "Official website/AAC: https://treasura.online/",
    "Official website responded with HTTP 200",
    "Server address: treasura.online",
    "Server port: 7171",
    "Thread author: OldSchoolBoy",
    "Original post date: 4/7/2024",
    "Forum discussion: 239 replies",
    "Thread visibility: 43,000 views",
    "Parsed version/client hint: 8",
    "Parsed region hint: Poland"
  ],
  "tags": [
    "community_archive server launch archive",
    "community thread",
    "Poland",
    "8",
    "Poland",
    "8.00"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://treasura.online/",
      "label": "Treasura |Long term x1| Start 12/04/2024 at 18:00 CEST official website"
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
      "url": "https://treasura.online/",
      "label": "https://treasura.online/"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/496b80ac70d4d3727871c158b78c0c9b",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://github.com/Skazi42",
      "label": "Skazi42"
    },
    {
      "type": "source_link",
      "url": "https://www.tiktok.com/video/7354858693357243681",
      "label": "https://www.tiktok.com/video/7354858693357243681"
    }
  ],
  "faq_items": [
    {
      "question": "Is Treasura |Long term x1| Start 12/04/2024 at 18:00 CEST verified?",
      "answer": "This page verifies that a matching community_archive server launch archive thread exists and that the thread exposes https://treasura.online/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Treasura |Long term x1| Start 12/04/2024 at 18:00 CEST?",
      "answer": "Start with https://treasura.online/ and the linked community_archive thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Treasura |Long term x1| Start 12/04/2024 at 18:00 CEST exposes https://treasura.online/ from its community_archive server launch archive source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function TreasuraLongTermX1Start12042024At1800CestPage() {
  return <CuratedGuideArticle page={page} />;
}
