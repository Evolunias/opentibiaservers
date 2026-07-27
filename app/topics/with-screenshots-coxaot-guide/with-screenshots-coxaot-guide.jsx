import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-coxaot-guide');
}

export default function WithScreenshotsCoxaotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-coxaot-guide" />;
}
