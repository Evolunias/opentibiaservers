import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-custom-map-server-argentina');
}

export default function ZezeniaOnlineCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-custom-map-server-argentina" />;
}
