import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classick-drakoria-guide');
}

export default function WithScreenshotsClassickDrakoriaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classick-drakoria-guide" />;
}
