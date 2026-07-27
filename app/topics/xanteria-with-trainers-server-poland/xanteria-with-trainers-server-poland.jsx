import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-trainers-server-poland');
}

export default function XanteriaWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-trainers-server-poland" />;
}
