import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-client-canada');
}

export default function WithTrainersClientCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-client-canada" />;
}
