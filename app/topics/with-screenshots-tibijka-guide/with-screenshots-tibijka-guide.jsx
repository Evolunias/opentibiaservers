import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibijka-guide');
}

export default function WithScreenshotsTibijkaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibijka-guide" />;
}
