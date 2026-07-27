import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classicus-wiki');
}

export default function WithScreenshotsClassicusWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classicus-wiki" />;
}
