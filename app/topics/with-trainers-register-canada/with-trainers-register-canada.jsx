import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-register-canada');
}

export default function WithTrainersRegisterCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-register-canada" />;
}
