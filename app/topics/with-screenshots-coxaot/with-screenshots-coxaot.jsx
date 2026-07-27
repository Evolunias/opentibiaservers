import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-coxaot');
}

export default function WithScreenshotsCoxaotKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-coxaot" />;
}
