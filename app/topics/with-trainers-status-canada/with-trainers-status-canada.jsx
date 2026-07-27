import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-status-canada');
}

export default function WithTrainersStatusCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-status-canada" />;
}
