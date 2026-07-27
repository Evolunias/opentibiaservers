import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvpe-server-argentina');
}

export default function ZezeniaOnlinePvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvpe-server-argentina" />;
}
