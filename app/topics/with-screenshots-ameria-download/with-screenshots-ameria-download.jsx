import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ameria-download');
}

export default function WithScreenshotsAmeriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ameria-download" />;
}
