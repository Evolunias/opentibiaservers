import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-yurots-online');
}

export default function WithReviewsYurotsOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-yurots-online" />;
}
