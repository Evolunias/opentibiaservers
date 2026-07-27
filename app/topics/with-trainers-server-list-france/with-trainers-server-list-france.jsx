import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-server-list-france');
}

export default function WithTrainersServerListFranceKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-server-list-france" />;
}
