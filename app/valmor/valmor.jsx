import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "community_archive-gala-valmor",
  "slug": "valmor",
  "name": "Valmor",
  "host": "valmor.pl",
  "ip": "valmor.pl",
  "port": 7171,
  "location": "POLAND",
  "version": "7",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 58,
  "source": "community_archive",
  "source_id": "https://opentibiaservers.com/",
  "source_url": "https://opentibiaservers.com/",
  "website_url": "https://valmor.pl",
  "external_launch_url": "https://valmor.pl",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Valmor",
  "template_name": "community_archive_source_reference",
  "updated_at": "2026-07-28T02:51:26.657Z",
  "last_seen_at": "2026-03-28T23:29:40+0100",
  "last_check": "2026-07-28T02:51:26.657Z",
  "official_summary": "Valmor enters the directory through a real community_archive server launch archive thread rather than an invented listing. The surviving record provides region hint: POLAND, version hint: 7, server address: valmor.pl, port 7171, official website reachable during import, 6 replies, 1,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Valmor is preserved through its community_archive server launch archive trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: community_archive server launch archive thread",
    "Official website/AAC: https://valmor.pl",
    "Official website responded with HTTP 200",
    "Server address: valmor.pl",
    "Server port: 7171",
    "Thread author: XoferPL",
    "Original post date: 3/29/2026",
    "Forum discussion: 6 replies",
    "Thread visibility: 1,000 views",
    "Parsed version/client hint: 7",
    "Parsed region hint: POLAND"
  ],
  "tags": [
    "community_archive server launch archive",
    "community thread",
    "POLAND",
    "7",
    "POLAND",
    "7.7",
    "OTC"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://valmor.pl",
      "label": "Valmor official website"
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
      "url": "https://valmor.pl",
      "label": "https://valmor.pl"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/63bf40856970215abef3ca1d7a98d94b",
      "label": "VirusTotal"
    }
  ],
  "faq_items": [
    {
      "question": "Is Valmor verified?",
      "answer": "This page verifies that a matching community_archive server launch archive thread exists and that the thread exposes https://valmor.pl as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Valmor?",
      "answer": "Start with https://valmor.pl and the linked community_archive thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Valmor exposes https://valmor.pl from its community_archive server launch archive source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function ValmorPage() {
  return <CuratedGuideArticle page={page} />;
}
