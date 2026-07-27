import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-wiki-brazil');
}

export default function WithReviewsWikiBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-wiki-brazil" />;
}
