import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-season-south-america');
}

export default function WithTrainersSeasonSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-season-south-america" />;
}
