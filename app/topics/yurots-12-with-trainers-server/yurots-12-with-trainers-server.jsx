import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-12-with-trainers-server');
}

export default function Yurots12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-12-with-trainers-server" />;
}
