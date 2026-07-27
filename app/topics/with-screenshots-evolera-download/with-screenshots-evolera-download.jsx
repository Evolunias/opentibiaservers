import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolera-download');
}

export default function WithScreenshotsEvoleraDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolera-download" />;
}
