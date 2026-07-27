import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-13-with-reviews-server');
}

export default function ZuneraOt13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-13-with-reviews-server" />;
}
