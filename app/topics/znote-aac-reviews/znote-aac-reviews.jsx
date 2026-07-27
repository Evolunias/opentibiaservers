import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-reviews');
}

export default function ZnoteAacReviewsKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-reviews" />;
}
