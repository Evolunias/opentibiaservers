import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibijka-download');
}

export default function WithScreenshotsTibijkaDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibijka-download" />;
}
