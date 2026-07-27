import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-custom-map-servers-france');
}

export default function ZezeniaOnlineCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-custom-map-servers-france" />;
}
