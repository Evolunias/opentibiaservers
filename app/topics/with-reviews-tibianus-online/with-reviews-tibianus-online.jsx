import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibianus-online');
}

export default function WithReviewsTibianusOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibianus-online" />;
}
