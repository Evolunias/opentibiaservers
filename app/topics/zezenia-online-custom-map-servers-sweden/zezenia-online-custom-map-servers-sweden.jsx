import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-custom-map-servers-sweden');
}

export default function ZezeniaOnlineCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-custom-map-servers-sweden" />;
}
