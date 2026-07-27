import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-season-canada');
}

export default function WithTrainersSeasonCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-season-canada" />;
}
