import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-cyntara-login');
}

export default function WithScreenshotsCyntaraLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-cyntara-login" />;
}
