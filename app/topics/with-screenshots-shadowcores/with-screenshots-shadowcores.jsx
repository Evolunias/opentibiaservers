import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-shadowcores');
}

export default function WithScreenshotsShadowcoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-shadowcores" />;
}
