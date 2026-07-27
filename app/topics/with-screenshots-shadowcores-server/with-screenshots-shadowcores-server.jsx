import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-shadowcores-server');
}

export default function WithScreenshotsShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-shadowcores-server" />;
}
