import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiascape-private-server');
}

export default function WithReviewsTibiascapePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiascape-private-server" />;
}
