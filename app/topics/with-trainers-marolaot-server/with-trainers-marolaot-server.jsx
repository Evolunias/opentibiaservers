import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-marolaot-server');
}

export default function WithTrainersMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-marolaot-server" />;
}
