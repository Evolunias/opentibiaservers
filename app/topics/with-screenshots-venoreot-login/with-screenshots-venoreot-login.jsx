import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-venoreot-login');
}

export default function WithScreenshotsVenoreotLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-venoreot-login" />;
}
