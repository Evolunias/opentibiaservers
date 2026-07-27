import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-yurots-server');
}

export default function WithTrainersYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-yurots-server" />;
}
