import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiascape-client');
}

export default function WithReviewsTibiascapeClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiascape-client" />;
}
