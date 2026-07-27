import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-register-germany');
}

export default function WithTrainersRegisterGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-register-germany" />;
}
