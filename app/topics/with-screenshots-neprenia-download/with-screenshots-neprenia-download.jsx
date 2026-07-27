import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-neprenia-download');
}

export default function WithScreenshotsNepreniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-neprenia-download" />;
}
