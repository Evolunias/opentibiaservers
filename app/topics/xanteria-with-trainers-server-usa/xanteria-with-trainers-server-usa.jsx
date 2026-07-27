import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-trainers-server-usa');
}

export default function XanteriaWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-trainers-server-usa" />;
}
