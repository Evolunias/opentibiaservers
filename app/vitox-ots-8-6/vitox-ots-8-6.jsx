import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "community_archive-gala-vitox-ots-8-6",
  "slug": "vitox-ots-8-6",
  "name": "Vitox OTS 8.6+",
  "host": "srv.vitox-ots.eu",
  "ip": "srv.vitox-ots.eu",
  "port": 7171,
  "location": "Poland",
  "version": "8.6",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 39,
  "source": "community_archive",
  "source_id": "https://opentibiaservers.com/",
  "source_url": "https://opentibiaservers.com/",
  "website_url": "https://vitox-ots.eu/",
  "external_launch_url": "https://vitox-ots.eu/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Vitox OTS 8.6+",
  "template_name": "community_archive_source_reference",
  "updated_at": "2026-07-28T02:51:25.691Z",
  "last_seen_at": "2025-04-12T13:26:00+0200",
  "last_check": "2026-07-28T02:51:25.691Z",
  "official_summary": "Vitox OTS 8.6+ enters the directory through a real community_archive server launch archive thread rather than an invented listing. The surviving record provides region hint: Poland, version hint: 8.6, server address: srv.vitox-ots.eu, port 7171, official website reachable during import, 23 replies, 5,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Vitox OTS 8.6+ is preserved through its community_archive server launch archive trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: community_archive server launch archive thread",
    "Official website/AAC: https://vitox-ots.eu/",
    "Official website responded with HTTP 200",
    "Server address: srv.vitox-ots.eu",
    "Server port: 7171",
    "Thread author: VitoxMaster",
    "Original post date: 4/12/2025",
    "Forum discussion: 23 replies",
    "Thread visibility: 5,000 views",
    "Parsed version/client hint: 8.6",
    "Parsed region hint: Poland"
  ],
  "tags": [
    "community_archive server launch archive",
    "community thread",
    "Poland",
    "8.6",
    "Poland",
    "Custom"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://vitox-ots.eu/",
      "label": "Vitox OTS 8.6+ official website"
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
      "url": "https://vitox-ots.eu/",
      "label": "https://vitox-ots.eu/"
    },
    {
      "type": "source_link",
      "url": "https://imgur.com/8gjobK6",
      "label": "https://imgur.com/8gjobK6"
    },
    {
      "type": "source_link",
      "url": "https://imgur.com/gqF4Fq8",
      "label": "https://imgur.com/gqF4Fq8"
    },
    {
      "type": "source_link",
      "url": "https://github.com/Sorky96",
      "label": "Sorky96"
    },
    {
      "type": "source_link",
      "url": "https://imgur.com/2RVjOQ7",
      "label": "https://imgur.com/2RVjOQ7"
    },
    {
      "type": "source_link",
      "url": "https://imgur.com/B3otumZ",
      "label": "https://imgur.com/B3otumZ"
    }
  ],
  "faq_items": [
    {
      "question": "Is Vitox OTS 8.6+ verified?",
      "answer": "This page verifies that a matching community_archive server launch archive thread exists and that the thread exposes https://vitox-ots.eu/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Vitox OTS 8.6+?",
      "answer": "Start with https://vitox-ots.eu/ and the linked community_archive thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Vitox OTS 8.6+ exposes https://vitox-ots.eu/ from its community_archive server launch archive source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
    },
    {
      "title": "Public media and screenshot leads",
      "body": "The source thread includes public media links that may contain screenshots, launch graphics, videos, or gameplay previews: https://imgur.com/8gjobK6, https://imgur.com/gqF4Fq8, https://imgur.com/2RVjOQ7, https://imgur.com/B3otumZ, https://imgur.com/4lV5vun, https://imgur.com/h10MGco. These should be linked for attribution unless the owner grants permission to mirror assets locally."
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

export default function VitoxOts86Page() {
  return <CuratedGuideArticle page={page} />;
}
