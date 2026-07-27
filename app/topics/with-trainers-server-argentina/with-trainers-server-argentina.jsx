import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-server-argentina');
}

export default function WithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-server-argentina" />;
}
