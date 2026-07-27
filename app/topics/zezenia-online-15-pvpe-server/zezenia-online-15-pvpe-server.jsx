import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-15-pvpe-server');
}

export default function ZezeniaOnline15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-15-pvpe-server" />;
}
