import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-servers-argentina');
}

export default function WithTrainersServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-servers-argentina" />;
}
