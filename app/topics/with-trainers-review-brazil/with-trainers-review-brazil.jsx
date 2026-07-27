import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-review-brazil');
}

export default function WithTrainersReviewBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-review-brazil" />;
}
