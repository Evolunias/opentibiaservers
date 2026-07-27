import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-thornia-server');
}

export default function WithTrainersThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-thornia-server" />;
}
