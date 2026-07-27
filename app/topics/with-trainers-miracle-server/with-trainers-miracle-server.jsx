import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-miracle-server');
}

export default function WithTrainersMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-miracle-server" />;
}
