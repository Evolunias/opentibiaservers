import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-tibiantis-server');
}

export default function WithTrainersTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-tibiantis-server" />;
}
