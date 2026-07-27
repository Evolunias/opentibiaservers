import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-yurots-official');
}

export default function WithReviewsYurotsOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-yurots-official" />;
}
