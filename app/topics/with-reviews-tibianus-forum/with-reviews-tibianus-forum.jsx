import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibianus-forum');
}

export default function WithReviewsTibianusForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibianus-forum" />;
}
