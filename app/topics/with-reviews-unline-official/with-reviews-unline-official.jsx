import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-unline-official');
}

export default function WithReviewsUnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-unline-official" />;
}
