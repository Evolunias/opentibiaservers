import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-classick-drakoria-server');
}

export default function WithTrainersClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-classick-drakoria-server" />;
}
