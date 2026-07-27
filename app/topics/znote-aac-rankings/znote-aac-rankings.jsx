import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-rankings');
}

export default function ZnoteAacRankingsKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-rankings" />;
}
