import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-xanteria-online');
}

export default function WithReviewsXanteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-xanteria-online" />;
}
