import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-trainers-server-germany');
}

export default function XanteriaWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-trainers-server-germany" />;
}
