import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaorigins-wiki');
}

export default function WithReviewsTibiaoriginsWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaorigins-wiki" />;
}
