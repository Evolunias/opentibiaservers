import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-alastera-download');
}

export default function WithScreenshotsAlasteraDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-alastera-download" />;
}
