import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-review-france');
}

export default function WithTrainersReviewFranceKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-review-france" />;
}
