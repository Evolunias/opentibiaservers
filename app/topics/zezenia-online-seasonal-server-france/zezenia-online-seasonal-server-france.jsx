import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-seasonal-server-france');
}

export default function ZezeniaOnlineSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-seasonal-server-france" />;
}
