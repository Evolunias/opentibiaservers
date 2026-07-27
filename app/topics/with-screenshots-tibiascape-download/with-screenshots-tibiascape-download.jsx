import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiascape-download');
}

export default function WithScreenshotsTibiascapeDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiascape-download" />;
}
