import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiara-wiki');
}

export default function WithReviewsTibiaraWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiara-wiki" />;
}
