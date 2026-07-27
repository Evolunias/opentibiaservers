import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiantis-wiki');
}

export default function WithScreenshotsTibiantisWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiantis-wiki" />;
}
