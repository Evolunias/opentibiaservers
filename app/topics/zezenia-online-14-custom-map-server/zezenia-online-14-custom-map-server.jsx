import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-14-custom-map-server');
}

export default function ZezeniaOnline14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-14-custom-map-server" />;
}
