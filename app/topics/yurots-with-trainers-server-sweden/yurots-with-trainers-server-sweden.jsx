import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-trainers-server-sweden');
}

export default function YurotsWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-trainers-server-sweden" />;
}
