import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-miracle-server');
}

export default function WithScreenshotsMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-miracle-server" />;
}
