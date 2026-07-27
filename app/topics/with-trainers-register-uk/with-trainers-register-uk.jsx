import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-register-uk');
}

export default function WithTrainersRegisterUkKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-register-uk" />;
}
