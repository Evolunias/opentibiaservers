import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-7-4-custom-map-server');
}

export default function ZezeniaOnline74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-7-4-custom-map-server" />;
}
