import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-real-map-servers-germany');
}

export default function ZezeniaOnlineRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-real-map-servers-germany" />;
}
