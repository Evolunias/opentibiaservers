import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-miracle-wiki');
}

export default function WithScreenshotsMiracleWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-miracle-wiki" />;
}
