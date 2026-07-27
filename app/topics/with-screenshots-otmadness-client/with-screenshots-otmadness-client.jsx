import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-otmadness-client');
}

export default function WithScreenshotsOtmadnessClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-otmadness-client" />;
}
