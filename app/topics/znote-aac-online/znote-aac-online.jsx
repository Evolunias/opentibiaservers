import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-online');
}

export default function ZnoteAacOnlineKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-online" />;
}
