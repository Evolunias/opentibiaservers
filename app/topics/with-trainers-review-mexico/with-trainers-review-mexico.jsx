import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-review-mexico');
}

export default function WithTrainersReviewMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-review-mexico" />;
}
