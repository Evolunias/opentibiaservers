import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaorigins-online');
}

export default function WithReviewsTibiaoriginsOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaorigins-online" />;
}
