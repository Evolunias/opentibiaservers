import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-carlinot-rules');
}

export default function WithScreenshotsCarlinotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-carlinot-rules" />;
}
