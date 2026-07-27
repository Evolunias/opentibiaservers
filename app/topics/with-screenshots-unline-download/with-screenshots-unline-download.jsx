import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-unline-download');
}

export default function WithScreenshotsUnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-unline-download" />;
}
