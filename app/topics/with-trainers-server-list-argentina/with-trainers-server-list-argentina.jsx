import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-server-list-argentina');
}

export default function WithTrainersServerListArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-server-list-argentina" />;
}
