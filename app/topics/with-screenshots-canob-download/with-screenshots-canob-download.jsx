import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-canob-download');
}

export default function WithScreenshotsCanobDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-canob-download" />;
}
