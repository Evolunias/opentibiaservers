import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-tibijka-server');
}

export default function WithTrainersTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-tibijka-server" />;
}
