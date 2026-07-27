import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-4-with-trainers-server');
}

export default function Yurots74WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-4-with-trainers-server" />;
}
