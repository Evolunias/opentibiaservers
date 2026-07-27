import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-wiki-uk');
}

export default function WithReviewsWikiUkKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-wiki-uk" />;
}
