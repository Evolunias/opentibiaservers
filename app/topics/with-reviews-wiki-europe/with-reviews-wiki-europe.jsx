import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-wiki-europe');
}

export default function WithReviewsWikiEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-wiki-europe" />;
}
