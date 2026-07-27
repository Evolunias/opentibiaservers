import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-oxygenot-server');
}

export default function WithTrainersOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-oxygenot-server" />;
}
