import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nilot-wiki');
}

export default function WithScreenshotsNilotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nilot-wiki" />;
}
