import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-download-europe');
}

export default function WithScreenshotsDownloadEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-download-europe" />;
}
