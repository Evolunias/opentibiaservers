import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolunia-rules');
}

export default function WithScreenshotsEvoluniaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolunia-rules" />;
}
