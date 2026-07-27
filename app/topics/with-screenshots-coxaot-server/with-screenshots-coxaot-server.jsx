import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-coxaot-server');
}

export default function WithScreenshotsCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-coxaot-server" />;
}
