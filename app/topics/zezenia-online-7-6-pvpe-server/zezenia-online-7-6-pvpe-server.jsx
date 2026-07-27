import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-7-6-pvpe-server');
}

export default function ZezeniaOnline76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-7-6-pvpe-server" />;
}
