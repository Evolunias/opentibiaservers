import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-shadowcores-ots');
}

export default function WithScreenshotsShadowcoresOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-shadowcores-ots" />;
}
