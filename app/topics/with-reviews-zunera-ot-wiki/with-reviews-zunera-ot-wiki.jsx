import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-zunera-ot-wiki');
}

export default function WithReviewsZuneraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-zunera-ot-wiki" />;
}
