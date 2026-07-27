import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-kasteria-download');
}

export default function WithScreenshotsKasteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-kasteria-download" />;
}
