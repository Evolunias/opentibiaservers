import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-15-with-reviews-server');
}

export default function ZuneraOt15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-15-with-reviews-server" />;
}
