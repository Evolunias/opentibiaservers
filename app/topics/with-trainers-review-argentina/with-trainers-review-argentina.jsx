import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-review-argentina');
}

export default function WithTrainersReviewArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-review-argentina" />;
}
