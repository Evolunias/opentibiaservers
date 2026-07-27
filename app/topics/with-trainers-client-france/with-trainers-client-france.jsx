import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-client-france');
}

export default function WithTrainersClientFranceKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-client-france" />;
}
