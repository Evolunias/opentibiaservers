import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-register-poland');
}

export default function WithTrainersRegisterPolandKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-register-poland" />;
}
