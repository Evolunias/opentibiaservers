import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-client-chile');
}

export default function WithTrainersClientChileKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-client-chile" />;
}
