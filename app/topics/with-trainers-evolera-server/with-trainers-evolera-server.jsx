import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-evolera-server');
}

export default function WithTrainersEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-evolera-server" />;
}
