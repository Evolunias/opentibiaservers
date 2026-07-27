import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-real-map-servers-france');
}

export default function ZezeniaOnlineRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-real-map-servers-france" />;
}
