import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvpe-server-canada');
}

export default function ZezeniaOnlinePvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvpe-server-canada" />;
}
