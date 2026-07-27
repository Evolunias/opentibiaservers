import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-register-sweden');
}

export default function WithTrainersRegisterSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-register-sweden" />;
}
