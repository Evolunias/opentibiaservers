import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-wiki-germany');
}

export default function WithReviewsWikiGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-wiki-germany" />;
}
