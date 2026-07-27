import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-status-sweden');
}

export default function WithTrainersStatusSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-status-sweden" />;
}
