import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiascape-online');
}

export default function WithReviewsTibiascapeOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiascape-online" />;
}
