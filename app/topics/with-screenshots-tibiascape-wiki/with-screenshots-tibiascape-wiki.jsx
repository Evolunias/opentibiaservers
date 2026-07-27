import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiascape-wiki');
}

export default function WithScreenshotsTibiascapeWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiascape-wiki" />;
}
