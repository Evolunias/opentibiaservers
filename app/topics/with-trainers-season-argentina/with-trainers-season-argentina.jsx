import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-season-argentina');
}

export default function WithTrainersSeasonArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-season-argentina" />;
}
