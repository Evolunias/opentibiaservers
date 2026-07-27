import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-real-map-server-uk');
}

export default function ZezeniaOnlineRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-real-map-server-uk" />;
}
