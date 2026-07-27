import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolunia-wiki');
}

export default function WithScreenshotsEvoluniaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolunia-wiki" />;
}
