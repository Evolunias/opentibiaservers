import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-forum-poland');
}

export default function WithScreenshotsForumPolandKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-forum-poland" />;
}
