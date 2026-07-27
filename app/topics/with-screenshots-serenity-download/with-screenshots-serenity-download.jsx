import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-serenity-download');
}

export default function WithScreenshotsSerenityDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-serenity-download" />;
}
