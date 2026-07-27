import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-client-germany');
}

export default function WithTrainersClientGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-client-germany" />;
}
