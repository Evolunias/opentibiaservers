import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oxygenot-forum');
}

export default function WithScreenshotsOxygenotForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oxygenot-forum" />;
}
