import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-11-with-trainers-server');
}

export default function Yurots11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-11-with-trainers-server" />;
}
