import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvpe-server-germany');
}

export default function ZezeniaOnlinePvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvpe-server-germany" />;
}
