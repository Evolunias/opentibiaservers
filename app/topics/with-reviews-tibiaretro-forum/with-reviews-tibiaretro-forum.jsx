import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaretro-forum');
}

export default function WithReviewsTibiaretroForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaretro-forum" />;
}
