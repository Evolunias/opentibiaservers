import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-otmadness-download');
}

export default function WithScreenshotsOtmadnessDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-otmadness-download" />;
}
