import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-7-4-pvpe-server');
}

export default function ZezeniaOnline74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-7-4-pvpe-server" />;
}
