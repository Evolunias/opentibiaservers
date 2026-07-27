import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-xanteria-guide');
}

export default function WithReviewsXanteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-xanteria-guide" />;
}
