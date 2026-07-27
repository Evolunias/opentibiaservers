import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibijka-ot');
}

export default function WithReviewsTibijkaOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibijka-ot" />;
}
