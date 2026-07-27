import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-carlinot-download');
}

export default function WithScreenshotsCarlinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-carlinot-download" />;
}
