import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-empirebr-rules');
}

export default function WithScreenshotsEmpirebrRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-empirebr-rules" />;
}
