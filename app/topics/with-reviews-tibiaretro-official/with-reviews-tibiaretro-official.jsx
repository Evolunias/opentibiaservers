import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaretro-official');
}

export default function WithReviewsTibiaretroOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaretro-official" />;
}
