import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-harmonia-ot-rules');
}

export default function WithScreenshotsHarmoniaOtRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-harmonia-ot-rules" />;
}
