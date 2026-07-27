import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nilot-download');
}

export default function WithScreenshotsNilotDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nilot-download" />;
}
