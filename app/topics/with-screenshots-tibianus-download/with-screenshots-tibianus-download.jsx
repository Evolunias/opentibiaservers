import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibianus-download');
}

export default function WithScreenshotsTibianusDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibianus-download" />;
}
