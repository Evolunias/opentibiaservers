import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-server-canada');
}

export default function WithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-server-canada" />;
}
