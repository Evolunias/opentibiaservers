import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-download-north-america');
}

export default function WithScreenshotsDownloadNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-download-north-america" />;
}
