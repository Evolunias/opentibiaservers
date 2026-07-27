import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiara-forum');
}

export default function WithReviewsTibiaraForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiara-forum" />;
}
