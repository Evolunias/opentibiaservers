import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-kasteria-server');
}

export default function WithTrainersKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-kasteria-server" />;
}
