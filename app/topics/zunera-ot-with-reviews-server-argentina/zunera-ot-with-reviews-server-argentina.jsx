import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-with-reviews-server-argentina');
}

export default function ZuneraOtWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-with-reviews-server-argentina" />;
}
