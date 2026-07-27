import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-kasteria-forum');
}

export default function WithScreenshotsKasteriaForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-kasteria-forum" />;
}
