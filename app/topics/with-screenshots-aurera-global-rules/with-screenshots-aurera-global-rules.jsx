import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-aurera-global-rules');
}

export default function WithScreenshotsAureraGlobalRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-aurera-global-rules" />;
}
