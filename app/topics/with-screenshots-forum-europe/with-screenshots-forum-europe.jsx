import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-forum-europe');
}

export default function WithScreenshotsForumEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-forum-europe" />;
}
