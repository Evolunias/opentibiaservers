import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiantis-forum');
}

export default function WithScreenshotsTibiantisForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiantis-forum" />;
}
