import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-download-france');
}

export default function WithScreenshotsDownloadFranceKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-download-france" />;
}
