import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-venoreot-official');
}

export default function WithScreenshotsVenoreotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-venoreot-official" />;
}
