import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiame-download');
}

export default function WithScreenshotsTibiameDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiame-download" />;
}
