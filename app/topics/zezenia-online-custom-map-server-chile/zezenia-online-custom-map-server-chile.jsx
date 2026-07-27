import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-custom-map-server-chile');
}

export default function ZezeniaOnlineCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-custom-map-server-chile" />;
}
