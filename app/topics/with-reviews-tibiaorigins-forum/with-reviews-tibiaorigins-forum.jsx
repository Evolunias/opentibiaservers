import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaorigins-forum');
}

export default function WithReviewsTibiaoriginsForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaorigins-forum" />;
}
