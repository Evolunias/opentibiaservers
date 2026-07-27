import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-download-uk');
}

export default function WithScreenshotsDownloadUkKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-download-uk" />;
}
