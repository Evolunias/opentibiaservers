import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-server-chile');
}

export default function WithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-server-chile" />;
}
