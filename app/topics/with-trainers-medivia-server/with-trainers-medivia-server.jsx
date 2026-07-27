import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-medivia-server');
}

export default function WithTrainersMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-medivia-server" />;
}
