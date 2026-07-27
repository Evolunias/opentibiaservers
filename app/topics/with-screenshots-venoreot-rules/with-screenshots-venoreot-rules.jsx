import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-venoreot-rules');
}

export default function WithScreenshotsVenoreotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-venoreot-rules" />;
}
