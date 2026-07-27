import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-4-with-trainers-server');
}

export default function Yurots84WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-4-with-trainers-server" />;
}
