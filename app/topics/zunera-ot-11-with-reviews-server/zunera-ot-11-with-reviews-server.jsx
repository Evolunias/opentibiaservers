import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-11-with-reviews-server');
}

export default function ZuneraOt11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-11-with-reviews-server" />;
}
