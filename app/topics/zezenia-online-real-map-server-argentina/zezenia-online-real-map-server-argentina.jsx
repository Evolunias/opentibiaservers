import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-real-map-server-argentina');
}

export default function ZezeniaOnlineRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-real-map-server-argentina" />;
}
