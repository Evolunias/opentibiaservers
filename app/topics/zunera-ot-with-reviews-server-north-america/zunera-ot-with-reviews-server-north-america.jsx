import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-with-reviews-server-north-america');
}

export default function ZuneraOtWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-with-reviews-server-north-america" />;
}
