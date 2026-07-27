import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-tibianus-server');
}

export default function WithTrainersTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-tibianus-server" />;
}
