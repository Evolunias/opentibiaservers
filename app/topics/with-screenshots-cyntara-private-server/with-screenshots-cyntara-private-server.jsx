import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-cyntara-private-server');
}

export default function WithScreenshotsCyntaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-cyntara-private-server" />;
}
