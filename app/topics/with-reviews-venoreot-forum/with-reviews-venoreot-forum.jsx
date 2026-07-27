import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-venoreot-forum');
}

export default function WithReviewsVenoreotForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-venoreot-forum" />;
}
