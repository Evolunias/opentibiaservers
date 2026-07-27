import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rubinot-rules');
}

export default function WithScreenshotsRubinotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rubinot-rules" />;
}
