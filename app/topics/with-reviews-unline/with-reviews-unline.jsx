import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-unline');
}

export default function WithReviewsUnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-unline" />;
}
