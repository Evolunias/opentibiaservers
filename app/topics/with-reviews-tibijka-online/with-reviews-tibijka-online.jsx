import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibijka-online');
}

export default function WithReviewsTibijkaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibijka-online" />;
}
