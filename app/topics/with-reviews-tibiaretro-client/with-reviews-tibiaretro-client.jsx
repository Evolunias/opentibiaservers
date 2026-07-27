import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaretro-client');
}

export default function WithReviewsTibiaretroClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaretro-client" />;
}
