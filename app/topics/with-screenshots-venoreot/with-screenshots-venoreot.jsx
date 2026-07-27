import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-venoreot');
}

export default function WithScreenshotsVenoreotKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-venoreot" />;
}
