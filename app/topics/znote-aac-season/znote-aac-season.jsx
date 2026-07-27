import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-season');
}

export default function ZnoteAacSeasonKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-season" />;
}
