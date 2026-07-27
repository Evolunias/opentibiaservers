import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiara-online');
}

export default function WithReviewsTibiaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiara-online" />;
}
