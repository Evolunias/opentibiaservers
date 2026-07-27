import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-register-europe');
}

export default function WithTrainersRegisterEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-register-europe" />;
}
