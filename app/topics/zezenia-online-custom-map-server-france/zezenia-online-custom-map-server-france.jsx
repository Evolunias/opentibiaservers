import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-custom-map-server-france');
}

export default function ZezeniaOnlineCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-custom-map-server-france" />;
}
