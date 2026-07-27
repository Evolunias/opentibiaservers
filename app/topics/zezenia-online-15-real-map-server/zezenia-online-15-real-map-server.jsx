import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-15-real-map-server');
}

export default function ZezeniaOnline15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-15-real-map-server" />;
}
