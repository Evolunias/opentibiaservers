import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-carlinot-guide');
}

export default function WithScreenshotsCarlinotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-carlinot-guide" />;
}
