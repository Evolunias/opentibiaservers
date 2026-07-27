import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-download-poland');
}

export default function WithScreenshotsDownloadPolandKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-download-poland" />;
}
