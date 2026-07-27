import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-yurots-wiki');
}

export default function WithScreenshotsYurotsWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-yurots-wiki" />;
}
