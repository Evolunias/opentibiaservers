import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-oldera-server');
}

export default function WithTrainersOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-oldera-server" />;
}
