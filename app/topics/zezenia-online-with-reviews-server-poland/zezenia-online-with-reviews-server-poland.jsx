import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-with-reviews-server-poland');
}

export default function ZezeniaOnlineWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-with-reviews-server-poland" />;
}
