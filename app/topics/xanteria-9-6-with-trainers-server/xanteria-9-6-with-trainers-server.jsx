import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-9-6-with-trainers-server');
}

export default function Xanteria96WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-9-6-with-trainers-server" />;
}
