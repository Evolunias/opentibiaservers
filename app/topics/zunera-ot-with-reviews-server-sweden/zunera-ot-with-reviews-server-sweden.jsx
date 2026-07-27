import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-with-reviews-server-sweden');
}

export default function ZuneraOtWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-with-reviews-server-sweden" />;
}
