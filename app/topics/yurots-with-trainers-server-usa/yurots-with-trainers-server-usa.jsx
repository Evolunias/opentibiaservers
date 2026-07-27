import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-trainers-server-usa');
}

export default function YurotsWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-trainers-server-usa" />;
}
