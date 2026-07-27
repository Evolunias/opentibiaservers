import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-venoreot-guide');
}

export default function WithScreenshotsVenoreotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-venoreot-guide" />;
}
