import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaretro-wiki');
}

export default function WithReviewsTibiaretroWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaretro-wiki" />;
}
