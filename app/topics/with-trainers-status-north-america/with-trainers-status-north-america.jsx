import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-status-north-america');
}

export default function WithTrainersStatusNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-status-north-america" />;
}
