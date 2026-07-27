import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-wiki-canada');
}

export default function WithReviewsWikiCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-wiki-canada" />;
}
