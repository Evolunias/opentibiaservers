import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-wiki-mexico');
}

export default function WithReviewsWikiMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-wiki-mexico" />;
}
