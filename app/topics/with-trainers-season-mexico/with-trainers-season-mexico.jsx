import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-season-mexico');
}

export default function WithTrainersSeasonMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-season-mexico" />;
}
