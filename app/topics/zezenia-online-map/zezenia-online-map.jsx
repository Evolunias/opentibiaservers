import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-map');
}

export default function ZezeniaOnlineMapKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-map" />;
}
