import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-otmadness-ot');
}

export default function WithScreenshotsOtmadnessOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-otmadness-ot" />;
}
