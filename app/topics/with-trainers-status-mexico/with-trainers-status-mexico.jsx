import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-status-mexico');
}

export default function WithTrainersStatusMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-status-mexico" />;
}
