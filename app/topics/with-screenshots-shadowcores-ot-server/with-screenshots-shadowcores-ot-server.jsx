import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-shadowcores-ot-server');
}

export default function WithScreenshotsShadowcoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-shadowcores-ot-server" />;
}
