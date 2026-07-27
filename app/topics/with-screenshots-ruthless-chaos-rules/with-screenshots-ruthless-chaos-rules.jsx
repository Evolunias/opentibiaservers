import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ruthless-chaos-rules');
}

export default function WithScreenshotsRuthlessChaosRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ruthless-chaos-rules" />;
}
