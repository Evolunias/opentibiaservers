import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-forum-sweden');
}

export default function WithScreenshotsForumSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-forum-sweden" />;
}
