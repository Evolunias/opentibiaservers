import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-canob-forum');
}

export default function WithScreenshotsCanobForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-canob-forum" />;
}
