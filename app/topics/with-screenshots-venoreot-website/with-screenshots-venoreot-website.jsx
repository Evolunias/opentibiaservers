import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-venoreot-website');
}

export default function WithScreenshotsVenoreotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-venoreot-website" />;
}
