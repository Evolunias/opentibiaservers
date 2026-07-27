import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-9-6-custom-map-server');
}

export default function ZezeniaOnline96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-9-6-custom-map-server" />;
}
