import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-shadowcores-official');
}

export default function WithScreenshotsShadowcoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-shadowcores-official" />;
}
