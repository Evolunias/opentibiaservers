import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oldera-download');
}

export default function WithScreenshotsOlderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oldera-download" />;
}
