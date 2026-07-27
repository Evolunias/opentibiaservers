import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-13-with-trainers-server');
}

export default function ZuneraOt13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-13-with-trainers-server" />;
}
