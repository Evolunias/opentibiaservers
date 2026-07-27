import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rookgaard-tales-wiki');
}

export default function WithScreenshotsRookgaardTalesWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rookgaard-tales-wiki" />;
}
