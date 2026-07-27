import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-sabrehaven-wiki');
}

export default function WithScreenshotsSabrehavenWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-sabrehaven-wiki" />;
}
