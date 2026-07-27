import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-midhem-download');
}

export default function WithScreenshotsMidhemDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-midhem-download" />;
}
