import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-tibiara-server');
}

export default function WithTrainersTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-tibiara-server" />;
}
