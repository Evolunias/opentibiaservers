import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classick-drakoria-wiki');
}

export default function WithScreenshotsClassickDrakoriaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classick-drakoria-wiki" />;
}
