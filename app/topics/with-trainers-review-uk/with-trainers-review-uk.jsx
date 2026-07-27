import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-review-uk');
}

export default function WithTrainersReviewUkKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-review-uk" />;
}
