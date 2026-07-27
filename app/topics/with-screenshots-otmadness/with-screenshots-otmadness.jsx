import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-otmadness');
}

export default function WithScreenshotsOtmadnessKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-otmadness" />;
}
