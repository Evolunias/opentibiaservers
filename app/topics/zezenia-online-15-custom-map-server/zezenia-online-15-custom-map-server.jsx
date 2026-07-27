import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-15-custom-map-server');
}

export default function ZezeniaOnline15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-15-custom-map-server" />;
}
