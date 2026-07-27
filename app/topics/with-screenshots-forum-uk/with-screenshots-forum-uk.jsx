import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-forum-uk');
}

export default function WithScreenshotsForumUkKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-forum-uk" />;
}
