import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-xanteria-download');
}

export default function WithScreenshotsXanteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-xanteria-download" />;
}
