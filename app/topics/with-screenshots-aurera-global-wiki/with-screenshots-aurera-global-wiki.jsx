import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-aurera-global-wiki');
}

export default function WithScreenshotsAureraGlobalWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-aurera-global-wiki" />;
}
