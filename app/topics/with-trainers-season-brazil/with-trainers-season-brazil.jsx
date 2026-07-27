import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-season-brazil');
}

export default function WithTrainersSeasonBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-season-brazil" />;
}
