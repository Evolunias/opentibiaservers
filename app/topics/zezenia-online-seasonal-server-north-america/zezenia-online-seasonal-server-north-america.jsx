import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-seasonal-server-north-america');
}

export default function ZezeniaOnlineSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-seasonal-server-north-america" />;
}
