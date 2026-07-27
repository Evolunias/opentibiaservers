import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-luminera-download');
}

export default function WithScreenshotsLumineraDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-luminera-download" />;
}
