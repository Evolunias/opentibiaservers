import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-unline-rules');
}

export default function WithScreenshotsUnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-unline-rules" />;
}
