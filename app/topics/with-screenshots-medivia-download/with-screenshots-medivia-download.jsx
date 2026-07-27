import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-medivia-download');
}

export default function WithScreenshotsMediviaDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-medivia-download" />;
}
