import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-season-north-america');
}

export default function WithTrainersSeasonNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-season-north-america" />;
}
