import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-review-chile');
}

export default function WithTrainersReviewChileKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-review-chile" />;
}
