import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaretro-guide');
}

export default function WithReviewsTibiaretroGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaretro-guide" />;
}
