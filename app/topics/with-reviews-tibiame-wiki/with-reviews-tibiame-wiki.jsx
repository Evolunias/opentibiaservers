import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiame-wiki');
}

export default function WithReviewsTibiameWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiame-wiki" />;
}
