import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-venoreot-server');
}

export default function WithTrainersVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-venoreot-server" />;
}
