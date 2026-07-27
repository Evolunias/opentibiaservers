import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-13-with-trainers-server');
}

export default function Xanteria13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-13-with-trainers-server" />;
}
