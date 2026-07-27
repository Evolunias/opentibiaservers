import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-server-list-germany');
}

export default function WithTrainersServerListGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-server-list-germany" />;
}
