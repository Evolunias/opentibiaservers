import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-real-map-server-france');
}

export default function ZezeniaOnlineRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-real-map-server-france" />;
}
