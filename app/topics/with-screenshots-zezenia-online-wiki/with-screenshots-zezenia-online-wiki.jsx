import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-zezenia-online-wiki');
}

export default function WithScreenshotsZezeniaOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-zezenia-online-wiki" />;
}
