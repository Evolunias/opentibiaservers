import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-12-with-reviews-server');
}

export default function ZezeniaOnline12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-12-with-reviews-server" />;
}
