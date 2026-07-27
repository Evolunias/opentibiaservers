import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-baiak-server-chile');
}

export default function ZezeniaOnlineBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-baiak-server-chile" />;
}
