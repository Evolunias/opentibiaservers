import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-otmadness-rules');
}

export default function WithScreenshotsOtmadnessRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-otmadness-rules" />;
}
