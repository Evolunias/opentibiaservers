import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-infernal-ot-rules');
}

export default function WithScreenshotsInfernalOtRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-infernal-ot-rules" />;
}
