import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-seasonal-server-germany');
}

export default function ZezeniaOnlineSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-seasonal-server-germany" />;
}
