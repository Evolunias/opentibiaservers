import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiame-wiki');
}

export default function WithScreenshotsTibiameWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiame-wiki" />;
}
