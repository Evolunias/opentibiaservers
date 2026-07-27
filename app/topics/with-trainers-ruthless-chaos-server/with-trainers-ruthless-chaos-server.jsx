import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-ruthless-chaos-server');
}

export default function WithTrainersRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-ruthless-chaos-server" />;
}
