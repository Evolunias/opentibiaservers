import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-register-mexico');
}

export default function WithTrainersRegisterMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-register-mexico" />;
}
