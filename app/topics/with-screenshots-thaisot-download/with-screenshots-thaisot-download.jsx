import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thaisot-download');
}

export default function WithScreenshotsThaisotDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thaisot-download" />;
}
