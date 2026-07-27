import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-imperianic-download');
}

export default function WithScreenshotsImperianicDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-imperianic-download" />;
}
