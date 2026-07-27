import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-status-south-america');
}

export default function WithTrainersStatusSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-status-south-america" />;
}
