import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibijka-ot-server');
}

export default function WithReviewsTibijkaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibijka-ot-server" />;
}
