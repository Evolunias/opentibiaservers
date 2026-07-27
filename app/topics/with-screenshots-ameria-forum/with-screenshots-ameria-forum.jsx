import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ameria-forum');
}

export default function WithScreenshotsAmeriaForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ameria-forum" />;
}
