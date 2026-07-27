import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-seasonal-server-europe');
}

export default function ZezeniaOnlineSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-seasonal-server-europe" />;
}
