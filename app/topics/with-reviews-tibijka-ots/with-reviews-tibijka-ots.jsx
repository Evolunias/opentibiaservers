import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibijka-ots');
}

export default function WithReviewsTibijkaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibijka-ots" />;
}
