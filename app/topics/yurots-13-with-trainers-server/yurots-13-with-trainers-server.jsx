import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-13-with-trainers-server');
}

export default function Yurots13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-13-with-trainers-server" />;
}
