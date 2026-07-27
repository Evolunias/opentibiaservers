import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-yurots-forum');
}

export default function WithReviewsYurotsForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-yurots-forum" />;
}
