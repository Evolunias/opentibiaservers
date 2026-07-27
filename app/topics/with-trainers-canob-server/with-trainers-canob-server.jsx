import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-canob-server');
}

export default function WithTrainersCanobServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-canob-server" />;
}
