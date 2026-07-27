import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-cyntara-client');
}

export default function WithScreenshotsCyntaraClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-cyntara-client" />;
}
