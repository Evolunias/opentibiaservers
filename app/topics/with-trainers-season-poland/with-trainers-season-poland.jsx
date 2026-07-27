import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-season-poland');
}

export default function WithTrainersSeasonPolandKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-season-poland" />;
}
