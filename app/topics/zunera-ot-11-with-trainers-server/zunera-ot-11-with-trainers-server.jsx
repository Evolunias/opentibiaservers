import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-11-with-trainers-server');
}

export default function ZuneraOt11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-11-with-trainers-server" />;
}
