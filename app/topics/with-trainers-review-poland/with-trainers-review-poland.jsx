import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-review-poland');
}

export default function WithTrainersReviewPolandKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-review-poland" />;
}
