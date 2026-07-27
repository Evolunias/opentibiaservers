import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-trainers-server-chile');
}

export default function XanteriaWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-trainers-server-chile" />;
}
