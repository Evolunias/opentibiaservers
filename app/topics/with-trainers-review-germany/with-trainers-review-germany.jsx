import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-review-germany');
}

export default function WithTrainersReviewGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-review-germany" />;
}
