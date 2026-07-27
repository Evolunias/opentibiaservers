import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-custom-map-servers-brazil');
}

export default function ZezeniaOnlineCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-custom-map-servers-brazil" />;
}
