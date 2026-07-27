import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibijka-wiki');
}

export default function WithReviewsTibijkaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibijka-wiki" />;
}
