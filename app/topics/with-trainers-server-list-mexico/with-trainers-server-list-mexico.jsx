import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-server-list-mexico');
}

export default function WithTrainersServerListMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-server-list-mexico" />;
}
