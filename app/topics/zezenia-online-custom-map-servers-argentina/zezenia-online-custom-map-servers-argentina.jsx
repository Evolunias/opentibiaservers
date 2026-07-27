import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-custom-map-servers-argentina');
}

export default function ZezeniaOnlineCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-custom-map-servers-argentina" />;
}
