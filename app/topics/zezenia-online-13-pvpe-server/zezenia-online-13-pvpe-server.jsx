import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-13-pvpe-server');
}

export default function ZezeniaOnline13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-13-pvpe-server" />;
}
