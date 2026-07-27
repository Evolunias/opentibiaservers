import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-cyntara-guide');
}

export default function WithScreenshotsCyntaraGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-cyntara-guide" />;
}
