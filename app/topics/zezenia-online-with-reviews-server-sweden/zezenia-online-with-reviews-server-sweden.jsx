import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-with-reviews-server-sweden');
}

export default function ZezeniaOnlineWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-with-reviews-server-sweden" />;
}
