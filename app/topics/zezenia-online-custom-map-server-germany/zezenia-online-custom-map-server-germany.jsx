import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-custom-map-server-germany');
}

export default function ZezeniaOnlineCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-custom-map-server-germany" />;
}
