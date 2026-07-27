import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realera-download');
}

export default function WithScreenshotsRealeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realera-download" />;
}
