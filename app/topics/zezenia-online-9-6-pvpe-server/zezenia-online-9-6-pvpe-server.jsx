import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-9-6-pvpe-server');
}

export default function ZezeniaOnline96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-9-6-pvpe-server" />;
}
