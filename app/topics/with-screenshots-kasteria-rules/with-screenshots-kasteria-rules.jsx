import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-kasteria-rules');
}

export default function WithScreenshotsKasteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-kasteria-rules" />;
}
