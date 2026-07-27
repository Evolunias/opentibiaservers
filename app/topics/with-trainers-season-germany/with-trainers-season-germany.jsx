import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-season-germany');
}

export default function WithTrainersSeasonGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-season-germany" />;
}
