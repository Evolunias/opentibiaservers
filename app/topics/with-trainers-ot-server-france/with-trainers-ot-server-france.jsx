import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-ot-server-france');
}

export default function WithTrainersOtServerFranceKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-ot-server-france" />;
}
