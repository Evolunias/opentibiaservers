import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-trainers-server-latin-america');
}

export default function XanteriaWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-trainers-server-latin-america" />;
}
