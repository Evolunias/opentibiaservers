import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-carlinot-server');
}

export default function WithTrainersCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-carlinot-server" />;
}
