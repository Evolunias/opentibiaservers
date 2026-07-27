import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-8-4-custom-map-server');
}

export default function ZezeniaOnline84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-8-4-custom-map-server" />;
}
