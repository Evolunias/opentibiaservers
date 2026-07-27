import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-status-brazil');
}

export default function WithTrainersStatusBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-status-brazil" />;
}
