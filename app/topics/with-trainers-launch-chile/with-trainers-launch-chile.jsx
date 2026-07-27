import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-launch-chile');
}

export default function WithTrainersLaunchChileKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-launch-chile" />;
}
