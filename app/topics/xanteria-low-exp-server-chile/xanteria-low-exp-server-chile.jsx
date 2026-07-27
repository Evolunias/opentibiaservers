import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-low-exp-server-chile');
}

export default function XanteriaLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="xanteria-low-exp-server-chile" />;
}
