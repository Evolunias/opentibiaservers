import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realesta-forum');
}

export default function WithScreenshotsRealestaForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realesta-forum" />;
}
