import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-seasonal-server-uk');
}

export default function ZezeniaOnlineSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-seasonal-server-uk" />;
}
