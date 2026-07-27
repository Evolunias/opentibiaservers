import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-status-mexico');
}

export default function WithScreenshotsStatusMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-status-mexico" />;
}
