import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-seasonal-server-argentina');
}

export default function ZezeniaOnlineSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-seasonal-server-argentina" />;
}
