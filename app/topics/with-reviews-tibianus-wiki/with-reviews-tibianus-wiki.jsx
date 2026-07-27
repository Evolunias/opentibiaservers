import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibianus-wiki');
}

export default function WithReviewsTibianusWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibianus-wiki" />;
}
