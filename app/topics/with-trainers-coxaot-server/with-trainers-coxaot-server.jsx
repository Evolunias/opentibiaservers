import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-coxaot-server');
}

export default function WithTrainersCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-coxaot-server" />;
}
