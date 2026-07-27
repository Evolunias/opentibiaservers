import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-real-map-server-north-america');
}

export default function ZezeniaOnlineRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-real-map-server-north-america" />;
}
