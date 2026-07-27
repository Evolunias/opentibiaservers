import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-classicus-server');
}

export default function WithTrainersClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-classicus-server" />;
}
