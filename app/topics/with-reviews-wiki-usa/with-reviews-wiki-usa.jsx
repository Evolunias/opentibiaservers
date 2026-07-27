import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-wiki-usa');
}

export default function WithReviewsWikiUsaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-wiki-usa" />;
}
