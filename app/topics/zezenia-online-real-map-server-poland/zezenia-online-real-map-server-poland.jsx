import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-real-map-server-poland');
}

export default function ZezeniaOnlineRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-real-map-server-poland" />;
}
