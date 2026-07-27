import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-venoreot-open-tibia');
}

export default function WithScreenshotsVenoreotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-venoreot-open-tibia" />;
}
