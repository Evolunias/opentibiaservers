import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-10-0-with-trainers-server');
}

export default function Yurots100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-10-0-with-trainers-server" />;
}
