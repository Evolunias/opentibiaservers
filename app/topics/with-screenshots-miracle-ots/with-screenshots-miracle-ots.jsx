import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-miracle-ots');
}

export default function WithScreenshotsMiracleOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-miracle-ots" />;
}
