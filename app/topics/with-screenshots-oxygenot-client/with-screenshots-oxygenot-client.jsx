import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oxygenot-client');
}

export default function WithScreenshotsOxygenotClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oxygenot-client" />;
}
