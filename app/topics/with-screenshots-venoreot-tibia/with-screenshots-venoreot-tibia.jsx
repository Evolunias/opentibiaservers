import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-venoreot-tibia');
}

export default function WithScreenshotsVenoreotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-venoreot-tibia" />;
}
