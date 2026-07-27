import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-wiki-sweden');
}

export default function WithReviewsWikiSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-wiki-sweden" />;
}
