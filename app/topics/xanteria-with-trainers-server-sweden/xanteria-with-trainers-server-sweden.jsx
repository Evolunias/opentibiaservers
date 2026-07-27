import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-trainers-server-sweden');
}

export default function XanteriaWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-trainers-server-sweden" />;
}
