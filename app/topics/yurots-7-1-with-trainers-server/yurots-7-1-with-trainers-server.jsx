import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-1-with-trainers-server');
}

export default function Yurots71WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-1-with-trainers-server" />;
}
