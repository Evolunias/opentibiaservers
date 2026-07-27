import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiara-guide');
}

export default function WithScreenshotsTibiaraGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiara-guide" />;
}
