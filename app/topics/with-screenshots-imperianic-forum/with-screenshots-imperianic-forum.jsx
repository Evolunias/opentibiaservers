import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-imperianic-forum');
}

export default function WithScreenshotsImperianicForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-imperianic-forum" />;
}
