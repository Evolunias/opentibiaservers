import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-alastera-wiki');
}

export default function WithScreenshotsAlasteraWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-alastera-wiki" />;
}
