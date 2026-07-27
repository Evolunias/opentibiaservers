import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibijka-private-server');
}

export default function WithReviewsTibijkaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibijka-private-server" />;
}
