import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-trainers-server-uk');
}

export default function XanteriaWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-trainers-server-uk" />;
}
