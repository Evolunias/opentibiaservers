import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-cyntara-download');
}

export default function WithScreenshotsCyntaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-cyntara-download" />;
}
