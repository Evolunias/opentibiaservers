import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-wiki-chile');
}

export default function WithReviewsWikiChileKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-wiki-chile" />;
}
