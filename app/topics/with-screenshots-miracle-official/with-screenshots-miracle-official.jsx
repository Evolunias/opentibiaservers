import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-miracle-official');
}

export default function WithScreenshotsMiracleOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-miracle-official" />;
}
