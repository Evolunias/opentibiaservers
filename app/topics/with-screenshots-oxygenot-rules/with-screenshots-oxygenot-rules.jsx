import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oxygenot-rules');
}

export default function WithScreenshotsOxygenotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oxygenot-rules" />;
}
