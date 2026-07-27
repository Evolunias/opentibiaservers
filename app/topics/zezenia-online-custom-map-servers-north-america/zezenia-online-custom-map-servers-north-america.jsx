import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-custom-map-servers-north-america');
}

export default function ZezeniaOnlineCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-custom-map-servers-north-america" />;
}
