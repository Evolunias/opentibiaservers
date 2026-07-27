import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiascape-server');
}

export default function WithReviewsTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiascape-server" />;
}
