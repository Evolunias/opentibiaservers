import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-custom-map-server-north-america');
}

export default function ZezeniaOnlineCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-custom-map-server-north-america" />;
}
