import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-10-0-seasonal-server');
}

export default function ZezeniaOnline100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-10-0-seasonal-server" />;
}
