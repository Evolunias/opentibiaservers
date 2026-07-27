import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-rubinot-server');
}

export default function WithTrainersRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-rubinot-server" />;
}
