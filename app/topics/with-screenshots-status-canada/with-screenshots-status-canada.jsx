import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-status-canada');
}

export default function WithScreenshotsStatusCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-status-canada" />;
}
