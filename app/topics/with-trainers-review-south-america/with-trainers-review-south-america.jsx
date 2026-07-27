import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-review-south-america');
}

export default function WithTrainersReviewSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-review-south-america" />;
}
