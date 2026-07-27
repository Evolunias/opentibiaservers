import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-8-4-with-reviews-server');
}

export default function ZuneraOt84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-8-4-with-reviews-server" />;
}
