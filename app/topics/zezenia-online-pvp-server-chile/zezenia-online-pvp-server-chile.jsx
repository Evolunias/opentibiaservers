import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvp-server-chile');
}

export default function ZezeniaOnlinePvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvp-server-chile" />;
}
