import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classicus-download');
}

export default function WithScreenshotsClassicusDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classicus-download" />;
}
