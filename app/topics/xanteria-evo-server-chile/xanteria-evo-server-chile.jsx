import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-evo-server-chile');
}

export default function XanteriaEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="xanteria-evo-server-chile" />;
}
