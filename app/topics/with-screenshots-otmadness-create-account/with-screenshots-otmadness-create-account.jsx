import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-otmadness-create-account');
}

export default function WithScreenshotsOtmadnessCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-otmadness-create-account" />;
}
