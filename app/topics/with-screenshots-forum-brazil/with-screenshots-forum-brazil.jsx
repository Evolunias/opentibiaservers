import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-forum-brazil');
}

export default function WithScreenshotsForumBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-forum-brazil" />;
}
