import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-reviews');
}

export default function ZezeniaOnlineReviewsKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-reviews" />;
}
