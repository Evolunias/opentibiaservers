import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nto-star-wiki');
}

export default function WithScreenshotsNtoStarWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nto-star-wiki" />;
}
