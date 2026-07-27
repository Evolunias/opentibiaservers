import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-review-sweden');
}

export default function WithTrainersReviewSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-review-sweden" />;
}
