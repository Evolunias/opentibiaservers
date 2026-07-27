import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-register-france');
}

export default function WithTrainersRegisterFranceKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-register-france" />;
}
