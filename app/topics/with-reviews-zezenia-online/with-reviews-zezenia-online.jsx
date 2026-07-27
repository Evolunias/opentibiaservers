import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-zezenia-online');
}

export default function WithReviewsZezeniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-zezenia-online" />;
}
