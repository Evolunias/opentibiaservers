import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-2026');
}

export default function ZnoteAac2026KeywordPage() {
  return <StaticKeywordPage slug="znote-aac-2026" />;
}
