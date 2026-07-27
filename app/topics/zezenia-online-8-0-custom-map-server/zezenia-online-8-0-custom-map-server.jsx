import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-8-0-custom-map-server');
}

export default function ZezeniaOnline80CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-8-0-custom-map-server" />;
}
