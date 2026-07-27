import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-ot-server-germany');
}

export default function WithTrainersOtServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-ot-server-germany" />;
}
