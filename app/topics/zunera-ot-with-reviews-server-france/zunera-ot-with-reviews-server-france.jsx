import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-with-reviews-server-france');
}

export default function ZuneraOtWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-with-reviews-server-france" />;
}
