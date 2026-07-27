import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-real-map');
}

export default function ZezeniaOnlineRealMapKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-real-map" />;
}
