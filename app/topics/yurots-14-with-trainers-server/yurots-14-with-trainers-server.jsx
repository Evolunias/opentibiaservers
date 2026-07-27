import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-14-with-trainers-server');
}

export default function Yurots14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-14-with-trainers-server" />;
}
