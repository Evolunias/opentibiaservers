import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiascape-forum');
}

export default function WithReviewsTibiascapeForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiascape-forum" />;
}
