import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-register-usa');
}

export default function WithTrainersRegisterUsaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-register-usa" />;
}
