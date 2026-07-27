import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-wiki-north-america');
}

export default function WithReviewsWikiNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-wiki-north-america" />;
}
