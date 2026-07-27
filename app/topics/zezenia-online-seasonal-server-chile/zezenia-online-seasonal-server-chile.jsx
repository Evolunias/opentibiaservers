import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-seasonal-server-chile');
}

export default function ZezeniaOnlineSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-seasonal-server-chile" />;
}
