import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-neprenia-wiki');
}

export default function WithScreenshotsNepreniaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-neprenia-wiki" />;
}
