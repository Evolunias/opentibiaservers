import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-mist-of-death-wiki');
}

export default function WithScreenshotsMistOfDeathWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-mist-of-death-wiki" />;
}
