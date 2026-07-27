import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-forum-south-america');
}

export default function WithScreenshotsForumSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-forum-south-america" />;
}
