import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-venoreot-ots');
}

export default function WithScreenshotsVenoreotOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-venoreot-ots" />;
}
