import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-with-reviews-server-latin-america');
}

export default function ZuneraOtWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-with-reviews-server-latin-america" />;
}
