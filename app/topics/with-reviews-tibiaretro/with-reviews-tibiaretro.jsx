import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaretro');
}

export default function WithReviewsTibiaretroKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaretro" />;
}
