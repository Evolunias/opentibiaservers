import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-shadowcores-ot');
}

export default function WithScreenshotsShadowcoresOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-shadowcores-ot" />;
}
