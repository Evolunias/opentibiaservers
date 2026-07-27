import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaretro-tibia');
}

export default function WithReviewsTibiaretroTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaretro-tibia" />;
}
