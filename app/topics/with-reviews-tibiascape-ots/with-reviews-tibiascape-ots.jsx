import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiascape-ots');
}

export default function WithReviewsTibiascapeOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiascape-ots" />;
}
