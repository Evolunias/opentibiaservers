import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-seasonal-server-poland');
}

export default function ZezeniaOnlineSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-seasonal-server-poland" />;
}
