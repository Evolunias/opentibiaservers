import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-poland');
}

export default function ZnoteAacPolandKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-poland" />;
}
