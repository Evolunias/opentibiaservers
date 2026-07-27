import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rookgaard-tales-guide');
}

export default function WithScreenshotsRookgaardTalesGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rookgaard-tales-guide" />;
}
