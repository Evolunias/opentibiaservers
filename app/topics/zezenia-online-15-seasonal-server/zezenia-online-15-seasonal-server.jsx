import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-15-seasonal-server');
}

export default function ZezeniaOnline15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-15-seasonal-server" />;
}
