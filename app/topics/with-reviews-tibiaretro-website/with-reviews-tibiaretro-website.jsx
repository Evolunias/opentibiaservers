import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaretro-website');
}

export default function WithReviewsTibiaretroWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaretro-website" />;
}
