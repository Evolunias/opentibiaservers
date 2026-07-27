import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-coxaot-login');
}

export default function WithScreenshotsCoxaotLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-coxaot-login" />;
}
