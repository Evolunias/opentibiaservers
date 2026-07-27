import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiantis-wiki');
}

export default function WithReviewsTibiantisWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiantis-wiki" />;
}
