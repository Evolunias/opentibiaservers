import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-coxaot-client');
}

export default function WithScreenshotsCoxaotClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-coxaot-client" />;
}
