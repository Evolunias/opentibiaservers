import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-server-list-sweden');
}

export default function WithTrainersServerListSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-server-list-sweden" />;
}
