import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvpe-server-south-america');
}

export default function ZezeniaOnlinePvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvpe-server-south-america" />;
}
