import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-trainers-server-europe');
}

export default function XanteriaWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-trainers-server-europe" />;
}
