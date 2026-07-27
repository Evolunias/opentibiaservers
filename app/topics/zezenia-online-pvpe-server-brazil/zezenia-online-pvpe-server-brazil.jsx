import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvpe-server-brazil');
}

export default function ZezeniaOnlinePvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvpe-server-brazil" />;
}
