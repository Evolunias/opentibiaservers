import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-wiki-argentina');
}

export default function WithReviewsWikiArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-wiki-argentina" />;
}
