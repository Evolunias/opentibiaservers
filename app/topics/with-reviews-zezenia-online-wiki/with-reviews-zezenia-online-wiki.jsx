import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-zezenia-online-wiki');
}

export default function WithReviewsZezeniaOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-zezenia-online-wiki" />;
}
