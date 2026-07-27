import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-11-with-trainers-server');
}

export default function Xanteria11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-11-with-trainers-server" />;
}
