import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-shadowcores-login');
}

export default function WithScreenshotsShadowcoresLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-shadowcores-login" />;
}
