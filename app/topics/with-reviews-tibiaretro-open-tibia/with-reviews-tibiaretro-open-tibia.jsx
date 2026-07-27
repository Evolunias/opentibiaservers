import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaretro-open-tibia');
}

export default function WithReviewsTibiaretroOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaretro-open-tibia" />;
}
