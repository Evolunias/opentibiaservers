import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-servers-canada');
}

export default function WithTrainersServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-servers-canada" />;
}
