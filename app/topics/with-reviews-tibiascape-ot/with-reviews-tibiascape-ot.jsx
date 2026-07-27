import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiascape-ot');
}

export default function WithReviewsTibiascapeOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiascape-ot" />;
}
