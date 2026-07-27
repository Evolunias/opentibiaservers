import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-miracle-rules');
}

export default function WithScreenshotsMiracleRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-miracle-rules" />;
}
