import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvpe-server-usa');
}

export default function ZezeniaOnlinePvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvpe-server-usa" />;
}
