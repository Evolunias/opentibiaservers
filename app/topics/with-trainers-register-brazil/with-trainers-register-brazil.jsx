import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-register-brazil');
}

export default function WithTrainersRegisterBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-register-brazil" />;
}
