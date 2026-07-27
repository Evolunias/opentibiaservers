import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-9-6-with-trainers-server');
}

export default function Yurots96WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-9-6-with-trainers-server" />;
}
