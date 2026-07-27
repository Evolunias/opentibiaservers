import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-cyntara-ot-server');
}

export default function WithScreenshotsCyntaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-cyntara-ot-server" />;
}
