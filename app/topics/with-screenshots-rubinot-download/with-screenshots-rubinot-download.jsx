import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rubinot-download');
}

export default function WithScreenshotsRubinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rubinot-download" />;
}
