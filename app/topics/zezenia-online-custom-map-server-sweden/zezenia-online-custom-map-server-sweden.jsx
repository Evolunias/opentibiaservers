import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-custom-map-server-sweden');
}

export default function ZezeniaOnlineCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-custom-map-server-sweden" />;
}
