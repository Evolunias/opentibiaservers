import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-status-chile');
}

export default function WithTrainersStatusChileKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-status-chile" />;
}
