import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-otmadness-open-tibia');
}

export default function WithScreenshotsOtmadnessOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-otmadness-open-tibia" />;
}
