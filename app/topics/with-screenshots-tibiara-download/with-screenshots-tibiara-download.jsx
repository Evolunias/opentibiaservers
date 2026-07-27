import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiara-download');
}

export default function WithScreenshotsTibiaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiara-download" />;
}
