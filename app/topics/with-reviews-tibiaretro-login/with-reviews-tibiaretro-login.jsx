import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaretro-login');
}

export default function WithReviewsTibiaretroLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaretro-login" />;
}
