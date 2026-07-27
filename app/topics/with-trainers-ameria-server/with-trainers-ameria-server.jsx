import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-ameria-server');
}

export default function WithTrainersAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-ameria-server" />;
}
