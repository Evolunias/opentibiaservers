import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classicus-forum');
}

export default function WithScreenshotsClassicusForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classicus-forum" />;
}
