import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-realera-server');
}

export default function WithTrainersRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-realera-server" />;
}
