import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-forum-usa');
}

export default function WithScreenshotsForumUsaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-forum-usa" />;
}
