import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-real-map-server-latin-america');
}

export default function ZezeniaOnlineRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-real-map-server-latin-america" />;
}
