import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-guide-chile');
}

export default function WithTrainersGuideChileKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-guide-chile" />;
}
