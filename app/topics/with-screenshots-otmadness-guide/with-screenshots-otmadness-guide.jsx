import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-otmadness-guide');
}

export default function WithScreenshotsOtmadnessGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-otmadness-guide" />;
}
