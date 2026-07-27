import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-seasonal-server-usa');
}

export default function ZezeniaOnlineSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-seasonal-server-usa" />;
}
