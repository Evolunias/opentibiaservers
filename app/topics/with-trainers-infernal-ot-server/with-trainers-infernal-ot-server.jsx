import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-infernal-ot-server');
}

export default function WithTrainersInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-infernal-ot-server" />;
}
