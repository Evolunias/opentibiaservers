import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-otmadness-register');
}

export default function WithScreenshotsOtmadnessRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-otmadness-register" />;
}
