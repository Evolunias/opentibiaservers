import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-sabrehaven-download');
}

export default function WithScreenshotsSabrehavenDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-sabrehaven-download" />;
}
