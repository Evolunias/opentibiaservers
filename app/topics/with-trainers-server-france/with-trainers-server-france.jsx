import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-server-france');
}

export default function WithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-server-france" />;
}
