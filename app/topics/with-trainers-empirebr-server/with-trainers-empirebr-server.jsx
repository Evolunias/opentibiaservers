import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-empirebr-server');
}

export default function WithTrainersEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-empirebr-server" />;
}
