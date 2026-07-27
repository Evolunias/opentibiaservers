import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-retro-server-germany');
}

export default function ZezeniaOnlineRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-retro-server-germany" />;
}
