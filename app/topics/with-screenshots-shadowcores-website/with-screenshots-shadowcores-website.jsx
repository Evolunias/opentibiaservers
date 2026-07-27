import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-shadowcores-website');
}

export default function WithScreenshotsShadowcoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-shadowcores-website" />;
}
