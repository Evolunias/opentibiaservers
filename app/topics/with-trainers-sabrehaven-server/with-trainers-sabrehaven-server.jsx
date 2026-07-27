import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-sabrehaven-server');
}

export default function WithTrainersSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-sabrehaven-server" />;
}
