import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-arcaniarl-wiki');
}

export default function WithScreenshotsArcaniarlWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-arcaniarl-wiki" />;
}
