import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-real-map-server-chile');
}

export default function ZezeniaOnlineRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-real-map-server-chile" />;
}
