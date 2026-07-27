import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-trainers-server-mexico');
}

export default function XanteriaWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-trainers-server-mexico" />;
}
