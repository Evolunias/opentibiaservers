import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-venoreot-server');
}

export default function WithScreenshotsVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-venoreot-server" />;
}
