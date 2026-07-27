import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-evo-server-chile');
}

export default function YurotsEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="yurots-evo-server-chile" />;
}
