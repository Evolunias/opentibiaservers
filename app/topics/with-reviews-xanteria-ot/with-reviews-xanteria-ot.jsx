import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-xanteria-ot');
}

export default function WithReviewsXanteriaOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-xanteria-ot" />;
}
