import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-server-list-north-america');
}

export default function WithTrainersServerListNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-server-list-north-america" />;
}
