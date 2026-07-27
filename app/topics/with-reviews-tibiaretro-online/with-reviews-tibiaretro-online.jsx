import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaretro-online');
}

export default function WithReviewsTibiaretroOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaretro-online" />;
}
