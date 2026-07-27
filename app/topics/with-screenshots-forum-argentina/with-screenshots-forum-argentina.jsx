import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-forum-argentina');
}

export default function WithScreenshotsForumArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-forum-argentina" />;
}
