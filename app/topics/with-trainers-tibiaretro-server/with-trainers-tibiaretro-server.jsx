import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-tibiaretro-server');
}

export default function WithTrainersTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-tibiaretro-server" />;
}
