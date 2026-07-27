import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-cyntara-register');
}

export default function WithScreenshotsCyntaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-cyntara-register" />;
}
