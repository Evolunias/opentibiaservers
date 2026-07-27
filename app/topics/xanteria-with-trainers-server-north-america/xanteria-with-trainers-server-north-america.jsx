import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-trainers-server-north-america');
}

export default function XanteriaWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-trainers-server-north-america" />;
}
