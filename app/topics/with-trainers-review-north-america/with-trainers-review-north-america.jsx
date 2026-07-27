import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-review-north-america');
}

export default function WithTrainersReviewNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-review-north-america" />;
}
