import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-discord');
}

export default function ZnoteAacDiscordKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-discord" />;
}
