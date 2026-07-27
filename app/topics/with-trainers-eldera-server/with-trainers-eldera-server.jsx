import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-eldera-server');
}

export default function WithTrainersElderaServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-eldera-server" />;
}
