import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-shadowcores-client');
}

export default function WithScreenshotsShadowcoresClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-shadowcores-client" />;
}
