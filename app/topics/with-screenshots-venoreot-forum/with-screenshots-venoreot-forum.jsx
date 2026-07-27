import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-venoreot-forum');
}

export default function WithScreenshotsVenoreotForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-venoreot-forum" />;
}
