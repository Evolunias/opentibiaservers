import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thaisot-guide');
}

export default function WithScreenshotsThaisotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thaisot-guide" />;
}
