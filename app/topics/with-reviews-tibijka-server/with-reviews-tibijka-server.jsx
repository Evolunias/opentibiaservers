import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibijka-server');
}

export default function WithReviewsTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibijka-server" />;
}
