import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-medivia-guide');
}

export default function WithScreenshotsMediviaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-medivia-guide" />;
}
