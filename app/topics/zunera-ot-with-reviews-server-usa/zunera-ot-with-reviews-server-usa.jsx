import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-with-reviews-server-usa');
}

export default function ZuneraOtWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-with-reviews-server-usa" />;
}
