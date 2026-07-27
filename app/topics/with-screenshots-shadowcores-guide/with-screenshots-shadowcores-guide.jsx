import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-shadowcores-guide');
}

export default function WithScreenshotsShadowcoresGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-shadowcores-guide" />;
}
