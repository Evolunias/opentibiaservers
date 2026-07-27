import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-with-reviews-server-france');
}

export default function ZezeniaOnlineWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-with-reviews-server-france" />;
}
