import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-miracle-client');
}

export default function WithScreenshotsMiracleClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-miracle-client" />;
}
