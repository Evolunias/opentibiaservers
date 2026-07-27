import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-14-pvpe-server');
}

export default function ZezeniaOnline14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-14-pvpe-server" />;
}
