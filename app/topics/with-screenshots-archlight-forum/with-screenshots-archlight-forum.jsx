import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-archlight-forum');
}

export default function WithScreenshotsArchlightForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-archlight-forum" />;
}
