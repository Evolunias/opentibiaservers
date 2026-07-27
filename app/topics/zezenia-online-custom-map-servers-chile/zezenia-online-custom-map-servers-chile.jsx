import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-custom-map-servers-chile');
}

export default function ZezeniaOnlineCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-custom-map-servers-chile" />;
}
