import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-unline-online');
}

export default function WithReviewsUnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-unline-online" />;
}
