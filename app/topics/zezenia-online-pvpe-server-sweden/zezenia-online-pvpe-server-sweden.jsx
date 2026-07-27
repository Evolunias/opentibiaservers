import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvpe-server-sweden');
}

export default function ZezeniaOnlinePvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvpe-server-sweden" />;
}
