import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibijka-forum');
}

export default function WithReviewsTibijkaForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibijka-forum" />;
}
