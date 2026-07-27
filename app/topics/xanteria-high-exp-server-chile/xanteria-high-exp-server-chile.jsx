import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-high-exp-server-chile');
}

export default function XanteriaHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="xanteria-high-exp-server-chile" />;
}
