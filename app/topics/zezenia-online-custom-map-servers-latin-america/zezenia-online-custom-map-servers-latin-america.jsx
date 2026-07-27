import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-custom-map-servers-latin-america');
}

export default function ZezeniaOnlineCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-custom-map-servers-latin-america" />;
}
