import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-15-with-reviews-server');
}

export default function ZezeniaOnline15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-15-with-reviews-server" />;
}
