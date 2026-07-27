import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-custom-map-server-south-america');
}

export default function ZezeniaOnlineCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-custom-map-server-south-america" />;
}
