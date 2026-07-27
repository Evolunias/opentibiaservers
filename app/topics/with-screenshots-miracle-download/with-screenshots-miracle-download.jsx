import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-miracle-download');
}

export default function WithScreenshotsMiracleDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-miracle-download" />;
}
