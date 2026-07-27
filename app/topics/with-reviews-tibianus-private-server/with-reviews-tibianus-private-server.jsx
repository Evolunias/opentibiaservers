import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibianus-private-server');
}

export default function WithReviewsTibianusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibianus-private-server" />;
}
