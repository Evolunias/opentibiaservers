import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-ot-server-sweden');
}

export default function WithTrainersOtServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-ot-server-sweden" />;
}
