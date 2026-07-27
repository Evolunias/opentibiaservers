import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvpe-server-chile');
}

export default function ZezeniaOnlinePvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvpe-server-chile" />;
}
