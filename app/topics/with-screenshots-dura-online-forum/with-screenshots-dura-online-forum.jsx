import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-dura-online-forum');
}

export default function WithScreenshotsDuraOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-dura-online-forum" />;
}
