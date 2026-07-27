import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-harmonia-ot-guide');
}

export default function WithScreenshotsHarmoniaOtGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-harmonia-ot-guide" />;
}
