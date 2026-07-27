import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-madnessalive-guide');
}

export default function WithScreenshotsMadnessaliveGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-madnessalive-guide" />;
}
