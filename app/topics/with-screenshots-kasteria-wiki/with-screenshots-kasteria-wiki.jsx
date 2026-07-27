import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-kasteria-wiki');
}

export default function WithScreenshotsKasteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-kasteria-wiki" />;
}
