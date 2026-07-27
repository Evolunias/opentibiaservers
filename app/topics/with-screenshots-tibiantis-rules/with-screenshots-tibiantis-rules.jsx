import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiantis-rules');
}

export default function WithScreenshotsTibiantisRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiantis-rules" />;
}
