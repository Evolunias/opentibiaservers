import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-venoreot-register');
}

export default function WithScreenshotsVenoreotRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-venoreot-register" />;
}
