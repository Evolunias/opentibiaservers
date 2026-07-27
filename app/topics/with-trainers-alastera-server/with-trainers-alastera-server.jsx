import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-alastera-server');
}

export default function WithTrainersAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-alastera-server" />;
}
