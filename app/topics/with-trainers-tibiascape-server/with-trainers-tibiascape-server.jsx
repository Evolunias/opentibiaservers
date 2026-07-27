import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-tibiascape-server');
}

export default function WithTrainersTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-tibiascape-server" />;
}
