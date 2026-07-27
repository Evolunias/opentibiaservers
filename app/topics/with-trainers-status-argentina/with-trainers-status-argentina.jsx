import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-status-argentina');
}

export default function WithTrainersStatusArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-status-argentina" />;
}
