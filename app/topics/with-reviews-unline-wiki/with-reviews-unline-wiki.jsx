import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-unline-wiki');
}

export default function WithReviewsUnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-unline-wiki" />;
}
