import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-eternal-odyssey-wiki');
}

export default function WithScreenshotsEternalOdysseyWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-eternal-odyssey-wiki" />;
}
