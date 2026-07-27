import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-aurera-global-server');
}

export default function WithTrainersAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-aurera-global-server" />;
}
