import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-8-1-custom-map-server');
}

export default function ZezeniaOnline81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-8-1-custom-map-server" />;
}
