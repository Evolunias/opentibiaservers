import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-forum-chile');
}

export default function WithScreenshotsForumChileKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-forum-chile" />;
}
