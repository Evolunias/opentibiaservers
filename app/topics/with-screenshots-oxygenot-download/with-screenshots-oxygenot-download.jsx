import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oxygenot-download');
}

export default function WithScreenshotsOxygenotDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oxygenot-download" />;
}
