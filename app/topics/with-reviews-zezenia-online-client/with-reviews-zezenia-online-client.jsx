import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-zezenia-online-client');
}

export default function WithReviewsZezeniaOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-zezenia-online-client" />;
}
