import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-custom-map-server-mexico');
}

export default function ZezeniaOnlineCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-custom-map-server-mexico" />;
}
