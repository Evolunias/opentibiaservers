import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-13-seasonal-server');
}

export default function ZezeniaOnline13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-13-seasonal-server" />;
}
