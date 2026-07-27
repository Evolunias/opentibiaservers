import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-blazera-download');
}

export default function WithScreenshotsBlazeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-blazera-download" />;
}
