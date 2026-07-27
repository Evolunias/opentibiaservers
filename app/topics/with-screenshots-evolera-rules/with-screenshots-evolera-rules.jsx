import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolera-rules');
}

export default function WithScreenshotsEvoleraRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolera-rules" />;
}
