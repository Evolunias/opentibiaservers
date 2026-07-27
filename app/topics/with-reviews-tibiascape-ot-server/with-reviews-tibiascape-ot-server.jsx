import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiascape-ot-server');
}

export default function WithReviewsTibiascapeOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiascape-ot-server" />;
}
