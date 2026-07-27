import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-client-sweden');
}

export default function WithTrainersClientSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-client-sweden" />;
}
