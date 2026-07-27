import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-non-pvp-server-chile');
}

export default function ZezeniaOnlineNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-non-pvp-server-chile" />;
}
