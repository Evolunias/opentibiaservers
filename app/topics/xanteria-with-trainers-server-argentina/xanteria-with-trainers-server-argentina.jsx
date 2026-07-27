import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-trainers-server-argentina');
}

export default function XanteriaWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-trainers-server-argentina" />;
}
