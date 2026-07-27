import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-custom-map-server-usa');
}

export default function ZezeniaOnlineCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-custom-map-server-usa" />;
}
