import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-otmadness-server');
}

export default function WithScreenshotsOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-otmadness-server" />;
}
