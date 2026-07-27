import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-midhem-guide');
}

export default function WithScreenshotsMidhemGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-midhem-guide" />;
}
