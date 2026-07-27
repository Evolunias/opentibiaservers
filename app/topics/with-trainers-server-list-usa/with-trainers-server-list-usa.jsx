import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-server-list-usa');
}

export default function WithTrainersServerListUsaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-server-list-usa" />;
}
