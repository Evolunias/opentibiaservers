import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-server-list-uk');
}

export default function WithTrainersServerListUkKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-server-list-uk" />;
}
