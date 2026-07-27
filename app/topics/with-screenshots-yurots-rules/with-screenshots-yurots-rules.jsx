import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-yurots-rules');
}

export default function WithScreenshotsYurotsRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-yurots-rules" />;
}
