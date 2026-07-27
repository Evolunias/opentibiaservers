import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-with-reviews-server-germany');
}

export default function ZuneraOtWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-with-reviews-server-germany" />;
}
