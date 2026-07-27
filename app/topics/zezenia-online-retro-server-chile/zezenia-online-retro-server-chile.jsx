import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-retro-server-chile');
}

export default function ZezeniaOnlineRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-retro-server-chile" />;
}
