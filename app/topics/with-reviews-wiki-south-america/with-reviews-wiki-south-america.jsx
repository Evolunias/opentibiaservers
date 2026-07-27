import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-wiki-south-america');
}

export default function WithReviewsWikiSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-wiki-south-america" />;
}
