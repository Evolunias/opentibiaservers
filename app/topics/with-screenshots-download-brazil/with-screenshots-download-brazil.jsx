import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-download-brazil');
}

export default function WithScreenshotsDownloadBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-download-brazil" />;
}
