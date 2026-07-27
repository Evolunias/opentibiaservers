import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-yurots-download');
}

export default function WithScreenshotsYurotsDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-yurots-download" />;
}
