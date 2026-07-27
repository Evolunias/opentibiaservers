import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-arcaniarl-rules');
}

export default function WithScreenshotsArcaniarlRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-arcaniarl-rules" />;
}
