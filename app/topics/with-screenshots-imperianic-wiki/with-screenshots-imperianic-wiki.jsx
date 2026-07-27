import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-imperianic-wiki');
}

export default function WithScreenshotsImperianicWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-imperianic-wiki" />;
}
