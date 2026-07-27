import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-trainers-server-brazil');
}

export default function XanteriaWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-trainers-server-brazil" />;
}
