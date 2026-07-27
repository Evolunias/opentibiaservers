import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-register-north-america');
}

export default function WithTrainersRegisterNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-register-north-america" />;
}
