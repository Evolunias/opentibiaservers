import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-with-reviews-server-europe');
}

export default function ZuneraOtWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-with-reviews-server-europe" />;
}
