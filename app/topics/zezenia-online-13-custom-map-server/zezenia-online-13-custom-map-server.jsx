import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-13-custom-map-server');
}

export default function ZezeniaOnline13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-13-custom-map-server" />;
}
