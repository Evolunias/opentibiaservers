import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-forum-germany');
}

export default function WithScreenshotsForumGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-forum-germany" />;
}
