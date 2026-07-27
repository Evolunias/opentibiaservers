import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-shadowcores-wiki');
}

export default function WithScreenshotsShadowcoresWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-shadowcores-wiki" />;
}
