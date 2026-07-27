import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-harmonia-ot-server');
}

export default function WithTrainersHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-harmonia-ot-server" />;
}
