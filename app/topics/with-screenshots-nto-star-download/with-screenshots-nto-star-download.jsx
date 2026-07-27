import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nto-star-download');
}

export default function WithScreenshotsNtoStarDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nto-star-download" />;
}
