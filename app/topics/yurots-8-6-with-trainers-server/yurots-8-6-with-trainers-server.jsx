import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-6-with-trainers-server');
}

export default function Yurots86WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-6-with-trainers-server" />;
}
