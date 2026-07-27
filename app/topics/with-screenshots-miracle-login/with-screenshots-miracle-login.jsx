import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-miracle-login');
}

export default function WithScreenshotsMiracleLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-miracle-login" />;
}
