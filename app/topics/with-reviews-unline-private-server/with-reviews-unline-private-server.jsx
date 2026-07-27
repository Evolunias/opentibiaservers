import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-unline-private-server');
}

export default function WithReviewsUnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-unline-private-server" />;
}
