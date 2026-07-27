import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-yurots-wiki');
}

export default function WithReviewsYurotsWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-yurots-wiki" />;
}
