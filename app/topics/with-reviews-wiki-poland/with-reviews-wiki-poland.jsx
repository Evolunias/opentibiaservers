import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-wiki-poland');
}

export default function WithReviewsWikiPolandKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-wiki-poland" />;
}
