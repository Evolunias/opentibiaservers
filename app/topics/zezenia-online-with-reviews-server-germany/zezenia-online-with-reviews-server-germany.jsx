import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-with-reviews-server-germany');
}

export default function ZezeniaOnlineWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-with-reviews-server-germany" />;
}
