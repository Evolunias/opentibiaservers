import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-otmadness-official');
}

export default function WithScreenshotsOtmadnessOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-otmadness-official" />;
}
