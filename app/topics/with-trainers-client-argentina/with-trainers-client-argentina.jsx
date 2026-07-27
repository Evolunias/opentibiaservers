import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-client-argentina');
}

export default function WithTrainersClientArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-client-argentina" />;
}
