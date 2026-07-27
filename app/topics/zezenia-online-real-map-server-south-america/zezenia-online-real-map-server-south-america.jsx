import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-real-map-server-south-america');
}

export default function ZezeniaOnlineRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-real-map-server-south-america" />;
}
