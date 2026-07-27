import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-miracle');
}

export default function WithScreenshotsMiracleKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-miracle" />;
}
