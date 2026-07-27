import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-wiki-france');
}

export default function WithReviewsWikiFranceKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-wiki-france" />;
}
