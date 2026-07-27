import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-download-usa');
}

export default function WithScreenshotsDownloadUsaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-download-usa" />;
}
