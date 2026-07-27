import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-xanteria');
}

export default function WithReviewsXanteriaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-xanteria" />;
}
