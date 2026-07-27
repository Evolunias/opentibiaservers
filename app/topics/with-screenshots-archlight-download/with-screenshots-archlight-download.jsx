import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-archlight-download');
}

export default function WithScreenshotsArchlightDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-archlight-download" />;
}
