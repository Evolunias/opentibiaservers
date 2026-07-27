import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-open-tibia-server-france');
}

export default function WithTrainersOpenTibiaServerFranceKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-open-tibia-server-france" />;
}
