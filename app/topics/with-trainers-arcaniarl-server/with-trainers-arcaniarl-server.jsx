import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-arcaniarl-server');
}

export default function WithTrainersArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-arcaniarl-server" />;
}
