import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-ot-server-argentina');
}

export default function WithTrainersOtServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-ot-server-argentina" />;
}
