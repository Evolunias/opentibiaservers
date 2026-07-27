import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-download-germany');
}

export default function WithScreenshotsDownloadGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-download-germany" />;
}
