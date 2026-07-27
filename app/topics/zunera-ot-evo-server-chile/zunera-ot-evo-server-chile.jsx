import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-evo-server-chile');
}

export default function ZuneraOtEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-evo-server-chile" />;
}
