import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-register-latin-america');
}

export default function WithTrainersRegisterLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-register-latin-america" />;
}
