import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classicus-rules');
}

export default function WithScreenshotsClassicusRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classicus-rules" />;
}
