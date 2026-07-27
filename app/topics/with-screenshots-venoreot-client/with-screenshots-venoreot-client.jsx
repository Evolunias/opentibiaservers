import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-venoreot-client');
}

export default function WithScreenshotsVenoreotClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-venoreot-client" />;
}
