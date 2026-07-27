import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-download-mexico');
}

export default function WithScreenshotsDownloadMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-download-mexico" />;
}
