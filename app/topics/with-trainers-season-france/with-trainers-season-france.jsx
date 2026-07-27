import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-season-france');
}

export default function WithTrainersSeasonFranceKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-season-france" />;
}
