import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-10-0-with-reviews-server');
}

export default function ZezeniaOnline100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-10-0-with-reviews-server" />;
}
