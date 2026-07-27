import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-shadowcores-rules');
}

export default function WithScreenshotsShadowcoresRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-shadowcores-rules" />;
}
