import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realera-forum');
}

export default function WithScreenshotsRealeraForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realera-forum" />;
}
