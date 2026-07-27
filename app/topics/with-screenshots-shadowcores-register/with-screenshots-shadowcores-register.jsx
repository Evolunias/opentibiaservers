import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-shadowcores-register');
}

export default function WithScreenshotsShadowcoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-shadowcores-register" />;
}
