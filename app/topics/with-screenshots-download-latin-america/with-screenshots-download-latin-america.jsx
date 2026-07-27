import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-download-latin-america');
}

export default function WithScreenshotsDownloadLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-download-latin-america" />;
}
