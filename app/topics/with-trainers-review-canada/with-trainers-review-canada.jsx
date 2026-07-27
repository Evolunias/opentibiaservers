import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-review-canada');
}

export default function WithTrainersReviewCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-review-canada" />;
}
