import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nto-star-forum');
}

export default function WithScreenshotsNtoStarForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nto-star-forum" />;
}
