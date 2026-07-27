import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiascape-wiki');
}

export default function WithReviewsTibiascapeWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiascape-wiki" />;
}
