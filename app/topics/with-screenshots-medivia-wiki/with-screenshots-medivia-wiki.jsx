import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-medivia-wiki');
}

export default function WithScreenshotsMediviaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-medivia-wiki" />;
}
