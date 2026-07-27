import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-thaisot-server');
}

export default function WithTrainersThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-thaisot-server" />;
}
