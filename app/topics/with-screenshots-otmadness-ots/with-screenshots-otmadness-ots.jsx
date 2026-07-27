import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-otmadness-ots');
}

export default function WithScreenshotsOtmadnessOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-otmadness-ots" />;
}
