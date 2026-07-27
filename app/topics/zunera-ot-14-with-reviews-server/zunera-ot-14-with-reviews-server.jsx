import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-14-with-reviews-server');
}

export default function ZuneraOt14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-14-with-reviews-server" />;
}
