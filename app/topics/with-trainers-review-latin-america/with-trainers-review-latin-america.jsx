import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-review-latin-america');
}

export default function WithTrainersReviewLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-review-latin-america" />;
}
