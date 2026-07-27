import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-0-with-trainers-server');
}

export default function Xanteria80WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-0-with-trainers-server" />;
}
