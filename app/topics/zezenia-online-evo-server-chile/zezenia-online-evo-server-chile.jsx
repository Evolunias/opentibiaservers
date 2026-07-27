import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-evo-server-chile');
}

export default function ZezeniaOnlineEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-evo-server-chile" />;
}
