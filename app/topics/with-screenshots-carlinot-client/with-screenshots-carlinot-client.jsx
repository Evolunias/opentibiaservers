import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-carlinot-client');
}

export default function WithScreenshotsCarlinotClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-carlinot-client" />;
}
