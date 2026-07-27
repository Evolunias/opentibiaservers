import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-trainers-server-france');
}

export default function XanteriaWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-trainers-server-france" />;
}
