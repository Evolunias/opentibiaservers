import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-8-0-seasonal-server');
}

export default function ZezeniaOnline80SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-8-0-seasonal-server" />;
}
