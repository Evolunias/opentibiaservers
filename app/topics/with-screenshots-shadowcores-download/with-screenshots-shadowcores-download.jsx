import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-shadowcores-download');
}

export default function WithScreenshotsShadowcoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-shadowcores-download" />;
}
