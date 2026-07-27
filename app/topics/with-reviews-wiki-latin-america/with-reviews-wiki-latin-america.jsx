import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-wiki-latin-america');
}

export default function WithReviewsWikiLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-wiki-latin-america" />;
}
