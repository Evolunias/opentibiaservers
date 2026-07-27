import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiascape-login');
}

export default function WithReviewsTibiascapeLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiascape-login" />;
}
