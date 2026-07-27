import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-download-argentina');
}

export default function WithScreenshotsDownloadArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-download-argentina" />;
}
