import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-miracle-guide');
}

export default function WithScreenshotsMiracleGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-miracle-guide" />;
}
