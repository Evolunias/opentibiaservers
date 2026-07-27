import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-with-reviews-server-poland');
}

export default function ZuneraOtWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-with-reviews-server-poland" />;
}
