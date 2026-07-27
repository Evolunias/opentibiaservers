import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaretro-ot');
}

export default function WithReviewsTibiaretroOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaretro-ot" />;
}
