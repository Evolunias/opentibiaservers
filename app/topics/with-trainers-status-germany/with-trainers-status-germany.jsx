import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-status-germany');
}

export default function WithTrainersStatusGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-status-germany" />;
}
