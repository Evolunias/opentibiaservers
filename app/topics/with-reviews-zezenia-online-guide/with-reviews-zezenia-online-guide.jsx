import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-zezenia-online-guide');
}

export default function WithReviewsZezeniaOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-zezenia-online-guide" />;
}
