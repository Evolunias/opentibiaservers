import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ameria-rules');
}

export default function WithScreenshotsAmeriaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ameria-rules" />;
}
