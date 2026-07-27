import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-real-map-servers-usa');
}

export default function ZezeniaOnlineRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-real-map-servers-usa" />;
}
