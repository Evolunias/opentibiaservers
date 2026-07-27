import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ranger-s-arcani-guide');
}

export default function WithScreenshotsRangerSArcaniGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ranger-s-arcani-guide" />;
}
