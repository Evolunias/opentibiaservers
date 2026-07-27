import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-15-with-trainers-server');
}

export default function ZuneraOt15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-15-with-trainers-server" />;
}
