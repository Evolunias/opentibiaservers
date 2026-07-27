import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-nostalther-server');
}

export default function WithTrainersNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-nostalther-server" />;
}
