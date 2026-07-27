import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-real-map-servers-sweden');
}

export default function ZezeniaOnlineRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-real-map-servers-sweden" />;
}
