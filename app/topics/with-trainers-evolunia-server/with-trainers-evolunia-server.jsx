import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-evolunia-server');
}

export default function WithTrainersEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-evolunia-server" />;
}
