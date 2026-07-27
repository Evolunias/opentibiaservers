import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-14-with-trainers-server');
}

export default function ZuneraOt14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-14-with-trainers-server" />;
}
