import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-otmadness-server');
}

export default function WithTrainersOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-otmadness-server" />;
}
