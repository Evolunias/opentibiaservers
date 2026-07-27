import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-trainers-server-canada');
}

export default function YurotsWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-trainers-server-canada" />;
}
