import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvpe-server-north-america');
}

export default function ZezeniaOnlinePvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvpe-server-north-america" />;
}
