import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-otmadness-login');
}

export default function WithScreenshotsOtmadnessLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-otmadness-login" />;
}
