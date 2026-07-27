import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiantis-online');
}

export default function WithReviewsTibiantisOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiantis-online" />;
}
