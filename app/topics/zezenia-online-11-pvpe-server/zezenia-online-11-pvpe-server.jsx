import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-11-pvpe-server');
}

export default function ZezeniaOnline11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-11-pvpe-server" />;
}
