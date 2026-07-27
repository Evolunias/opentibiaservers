import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-forum-mexico');
}

export default function WithScreenshotsForumMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-forum-mexico" />;
}
